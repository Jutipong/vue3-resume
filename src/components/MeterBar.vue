<script setup lang="ts">
    import { onBeforeUnmount, onMounted, ref } from 'vue'

    defineProps<{
        value: number
        label?: string
        tone?: 'green' | 'yellow'
    }>()

    const track = ref<HTMLElement | null>(null)
    const visible = ref(false)
    let observer: IntersectionObserver | undefined

    onMounted(() => {
        if (!track.value || !('IntersectionObserver' in window)) {
            visible.value = true
            return
        }
        observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    visible.value = true
                    observer?.disconnect()
                }
            },
            { threshold: 0.5 }
        )
        observer.observe(track.value)
    })

    onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
    <div
        ref="track"
        class="meter"
        role="meter"
        :aria-label="label"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="value">
        <div
            class="meter-fill"
            :class="tone === 'yellow' ? 'bg-term-yellow' : 'bg-term-green'"
            :style="{ width: visible ? `${value}%` : '0%' }" />
    </div>
</template>

<style scoped lang="scss">
    .meter {
        flex: 1;
        min-width: 4rem;
        height: 0.875rem;
        background-image: radial-gradient(circle, var(--term-dot) 1px, transparent 1.5px);
        background-size: 5px 5px;
    }

    .meter-fill {
        height: 100%;
        transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    }

    @media (prefers-reduced-motion: reduce) {
        .meter-fill {
            transition: none;
        }
    }
</style>
