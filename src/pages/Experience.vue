<script setup lang="ts">
    import Title from '@components/Title.vue'

    import resume from '../config/resume.json'

    type ExperienceModel = {
        company: string
        start: string
        end: string | null
        position: string
        description?: string
    }

    const experience = resume.experience as ExperienceModel[]

    function parseMonth(value: string): Date {
        const [month, year] = value.split('/').map(Number)
        return new Date(year, month - 1, 1)
    }

    function monthsBetween(start: string, end: Date): number {
        const from = parseMonth(start)
        return (end.getFullYear() - from.getFullYear()) * 12 + (end.getMonth() - from.getMonth())
    }

    function formatDuration(months: number): string {
        if (months < 12) {
            return `${months}M`
        }
        return `${(months / 12).toFixed(1)}Y`
    }

    function formatRange(start: string, end: string | null): string {
        const months = monthsBetween(start, end ? parseMonth(end) : new Date())
        return `${start} - ${end ?? 'Present'} (${formatDuration(months)})`
    }
</script>

<template>
    <div class="bg-grey-10 p-4 pt-12 text-white lg:px-12">
        <div class="pb-2">
            <Title
                title="EXPERIENCE"
                description="PROFESSIONAL AND ACADEMIC"
                textColor="text-white" />
        </div>
        <div class="bg-grey-10 text-white">
            <ol class="border-secondary relative ml-3 border-l-2">
                <li
                    v-for="(item, index) in experience"
                    :key="index"
                    class="relative pb-6 pl-6 last:pb-0">
                    <span class="ring-grey-10 absolute top-1.5 left-[-8px] h-4 w-4 rounded-full bg-orange-400 ring-4" />
                    <div class="font-medium">{{ item.company }}</div>
                    <div class="text-sm opacity-80">{{ formatRange(item.start, item.end) }}</div>
                    <div class="mt-1">
                        <u>Position:</u>
                        {{ item.position }}
                    </div>
                    <div
                        v-if="item.description"
                        class="mt-1">
                        <u>Description:</u>
                        {{ item.description }}
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>
