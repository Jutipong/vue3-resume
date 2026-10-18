<script setup lang="ts">
    defineProps<{
        title: string
        icon: string
    }>()
</script>

<template>
    <section>
        <header class="flex items-center gap-3">
            <i
                :class="icon"
                class="text-term-lavender shrink-0 text-lg"
                aria-hidden="true" />
            <h2 class="text-term-lavender shrink-0 text-base font-semibold">{{ title }}</h2>
            <span
                class="dotted-rule flex-1"
                aria-hidden="true" />
        </header>
        <div class="mt-6">
            <slot />
        </div>
    </section>
</template>
