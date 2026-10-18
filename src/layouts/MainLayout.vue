<script setup lang="ts">
    import { onBeforeUnmount, onMounted, ref } from 'vue'

    const showScrollTop = ref(false)

    function onScroll(): void {
        showScrollTop.value = window.scrollY > 100
    }

    function scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <main class="flex-1">
            <router-view />
        </main>

        <button
            v-show="showScrollTop"
            type="button"
            class="term-btn fixed right-5 bottom-5 z-10"
            title="Scroll to top"
            @click="scrollToTop">
            <i
                class="i-la-angle-double-up"
                aria-hidden="true" />
            top
        </button>

        <footer class="text-term-dim mx-auto w-full max-w-6xl px-6 pb-10 text-sm md:px-12">
            <div class="dotted-rule mb-6" />
            <p class="text-center md:text-right">
                Developed with
                <i class="i-la-heartbeat mx-2 align-middle text-pink-500" />
                +
                <i class="i-logos-vue mr-2 align-middle" />
            </p>
        </footer>
    </div>
</template>
