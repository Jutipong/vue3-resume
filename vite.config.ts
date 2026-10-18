import { fileURLToPath, URL } from 'node:url'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [Vue(), UnoCSS()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
            '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
        },
    },
})
