<script setup lang="ts">
    import MeterBar from '@components/MeterBar.vue'
    import TerminalPanel from '@components/TerminalPanel.vue'
    import profileMe from '@img/profile-me.png'
    import { onBeforeUnmount, ref } from 'vue'

    import resume from '../config/resume.json'

    interface ExperienceModel {
        company: string
        start: string
        end: string | null
        position: string
        description?: string
    }

    interface SkillModel {
        category: string
        level: number
        tags: Array<{ name: string; icon: string }>
    }

    interface EducationModel {
        title: string
        description: string
        gpa: number
    }

    const { profile, personal, contact } = resume
    const skills = resume.skills as SkillModel[]
    const education = resume.education as EducationModel[]
    const certifications = resume.certifications
    const emails = contact.email.split(',').map(address => address.trim())
    const githubLabel = contact.github.replace(/^https?:\/\//, '')

    const skillImages = import.meta.glob('../assets/img/skills/*.{png,svg}', { eager: true, import: 'default' }) as Record<string, string>
    const skillIcons: Record<string, string> = {}
    for (const [path, src] of Object.entries(skillImages)) {
        skillIcons[path.split('/').pop() ?? path] = src
    }

    const now = new Date()

    const [birthYear, birthMonth, birthDay] = personal.birthDate.split('-').map(Number)
    const birthdayPassed = now.getMonth() + 1 > birthMonth || (now.getMonth() + 1 === birthMonth && now.getDate() >= birthDay)
    const age = now.getFullYear() - birthYear - (birthdayPassed ? 0 : 1)
    const birthDateLabel = new Date(birthYear, birthMonth - 1, birthDay).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })

    function parseMonth(value: string): Date {
        const [month, year] = value.split('/').map(Number)
        return new Date(year, month - 1, 1)
    }

    function monthsBetween(from: Date, to: Date): number {
        return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
    }

    function formatDuration(months: number): string {
        return months < 12 ? `${months}M` : `${(months / 12).toFixed(1)}Y`
    }

    const roles = (resume.experience as ExperienceModel[]).map(item => ({
        ...item,
        months: monthsBetween(parseMonth(item.start), item.end ? parseMonth(item.end) : now),
    }))
    const longestRole = Math.max(...roles.map(role => role.months))
    const careerStart = new Date(Math.min(...roles.map(role => parseMonth(role.start).getTime())))
    const uptime = formatDuration(monthsBetween(careerStart, now))

    const copied = ref<string | null>(null)
    let copyTimer: ReturnType<typeof setTimeout> | undefined

    async function copy(address: string): Promise<void> {
        try {
            await navigator.clipboard.writeText(address)
            copied.value = address
            clearTimeout(copyTimer)
            copyTimer = setTimeout(() => (copied.value = null), 1500)
        } catch {
            copied.value = null
        }
    }

    onBeforeUnmount(() => clearTimeout(copyTimer))
</script>

<template>
    <div class="mx-auto w-full max-w-6xl px-6 py-10 md:px-12 md:py-14">
        <div class="prompt text-xs sm:text-sm">
            <span class="text-term-fg">resume --status</span>
        </div>

        <header class="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center gap-6">
                <img
                    :src="profileMe"
                    :alt="profile.name"
                    class="ring-term-lavender h-20 w-20 shrink-0 rounded-full object-cover ring-2 md:h-24 md:w-24" />
                <div>
                    <h1 class="text-term-fg text-3xl font-bold md:text-4xl">{{ profile.name }}</h1>
                    <p class="text-term-lavender mt-1">{{ profile.title }}</p>
                    <p class="text-term-dim mt-3 text-sm">
                        Uptime <span class="text-term-fg">{{ uptime }}</span>
                    </p>
                </div>
            </div>

            <dl class="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 text-sm">
                <dt class="text-term-dim">Email</dt>
                <dd class="flex flex-col items-start gap-1">
                    <button
                        v-for="address in emails"
                        :key="address"
                        type="button"
                        class="hover:text-term-lavender flex items-center gap-3 text-left transition-colors"
                        :title="`Copy ${address}`"
                        @click="copy(address)">
                        {{ address }}
                        <span
                            v-if="copied === address"
                            class="text-term-green text-xs">
                            copied
                        </span>
                    </button>
                </dd>
                <dt class="text-term-dim">Phone</dt>
                <dd>{{ contact.phone }}</dd>
                <dt class="text-term-dim">GitHub</dt>
                <dd>
                    <a
                        :href="contact.github"
                        target="_blank"
                        rel="noopener"
                        class="hover:text-term-lavender transition-colors">
                        {{ githubLabel }}
                    </a>
                </dd>
            </dl>
        </header>

        <div class="dotted-rule mt-10" />

        <div class="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            <div class="flex flex-col gap-12">
                <TerminalPanel
                    title="Personal"
                    icon="i-la-user">
                    <dl class="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
                        <dt class="text-term-dim">Nationality</dt>
                        <dd>{{ personal.nationality }}</dd>
                        <dt class="text-term-dim">Height</dt>
                        <dd>{{ personal.height }}</dd>
                        <dt class="text-term-dim">Weight</dt>
                        <dd>{{ personal.weight }}</dd>
                        <dt class="text-term-dim">Birth Date</dt>
                        <dd>{{ birthDateLabel }} (age {{ age }})</dd>
                    </dl>
                </TerminalPanel>

                <TerminalPanel
                    title="Experience"
                    icon="i-la-briefcase">
                    <ol class="space-y-6">
                        <li
                            v-for="role in roles"
                            :key="`${role.company}-${role.start}`"
                            class="space-y-1.5">
                            <div class="flex items-baseline justify-between gap-4">
                                <h3 class="text-term-fg min-w-0 font-semibold">{{ role.company }}</h3>
                                <span class="text-term-dim shrink-0">{{ formatDuration(role.months) }}</span>
                            </div>
                            <MeterBar
                                :value="(role.months / longestRole) * 100"
                                :tone="role.end ? 'green' : 'yellow'"
                                :label="`${role.company} ${formatDuration(role.months)}`" />
                            <div class="text-term-dim flex flex-wrap gap-x-4">
                                <span>{{ role.position }}</span>
                                <span>{{ role.start }} – {{ role.end ?? 'Present' }}</span>
                            </div>
                            <div
                                v-if="role.description"
                                class="text-term-dim">
                                {{ role.description }}
                            </div>
                        </li>
                    </ol>
                </TerminalPanel>
            </div>

            <div class="flex flex-col gap-12">
                <TerminalPanel
                    title="Skills"
                    icon="i-la-microchip">
                    <div class="space-y-6">
                        <div
                            v-for="skill in skills"
                            :key="skill.category"
                            class="space-y-2">
                            <div class="flex items-center gap-4">
                                <span class="text-term-fg w-20 shrink-0 md:w-24">{{ skill.category }}</span>
                                <MeterBar
                                    :value="skill.level"
                                    :label="`${skill.category} ${skill.level}%`" />
                                <span class="w-12 shrink-0 text-right">{{ skill.level }}%</span>
                            </div>
                            <div class="text-term-dim flex flex-wrap gap-x-4 gap-y-1 pl-24 md:pl-28">
                                <span
                                    v-for="tag in skill.tags"
                                    :key="tag.name"
                                    class="flex items-center gap-2">
                                    <img
                                        v-if="skillIcons[tag.icon]"
                                        :src="skillIcons[tag.icon]"
                                        alt=""
                                        class="h-4 w-4" />
                                    {{ tag.name }}
                                </span>
                            </div>
                        </div>
                    </div>
                </TerminalPanel>

                <TerminalPanel
                    title="Education"
                    icon="i-la-graduation-cap">
                    <ul class="space-y-6">
                        <li
                            v-for="item in education"
                            :key="item.title"
                            class="space-y-2">
                            <div class="text-term-fg font-semibold">{{ item.title }}</div>
                            <div class="text-term-dim">{{ item.description }}</div>
                            <div class="flex items-center gap-4">
                                <span class="text-term-dim w-12 shrink-0">GPA</span>
                                <MeterBar
                                    :value="(item.gpa / 4) * 100"
                                    :label="`GPA ${item.gpa.toFixed(2)} of 4.00`" />
                                <span class="w-12 shrink-0 text-right">{{ item.gpa.toFixed(2) }}</span>
                            </div>
                        </li>
                    </ul>
                </TerminalPanel>

                <TerminalPanel
                    title="Certifications"
                    icon="i-la-certificate">
                    <ul class="space-y-3">
                        <li
                            v-for="cert in certifications"
                            :key="cert"
                            class="flex items-start gap-3">
                            <i
                                class="i-la-check text-term-green mt-1 shrink-0"
                                aria-hidden="true" />
                            <span>{{ cert }}</span>
                        </li>
                    </ul>
                </TerminalPanel>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .prompt {
        display: inline-block;
        width: 15ch;
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid var(--term-fg);
        animation:
            typing 1.1s steps(15, end) 0.2s both,
            caret 0.9s steps(1) infinite;
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 15ch;
        }
    }

    @keyframes caret {
        50% {
            border-color: transparent;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .prompt {
            width: auto;
            border-right: 0;
            animation: none;
        }
    }
</style>
