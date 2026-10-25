import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
    presets: [
        presetWind4(),
        presetIcons({
            scale: 1.1,
            warn: true,
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle',
            },
        }),
    ],
    theme: {
        colors: {
            primary: '#1976d2',
            secondary: '#26a69a',
            positive: '#21ba45',
            blue: '#2196f3',
            'grey-10': '#212121',
            'term-bg': 'var(--term-bg)',
            'term-fg': 'var(--term-fg)',
            'term-dim': 'var(--term-dim)',
            'term-lavender': 'var(--term-lavender)',
            'term-green': 'var(--term-green)',
            'term-yellow': 'var(--term-yellow)',
            'term-line': 'var(--term-line)',
            'term-dot': 'var(--term-dot)',
        },
    },
    shortcuts: {
        'term-btn':
            'inline-flex items-center gap-2 border border-term-line bg-term-bg px-3 py-1.5 text-sm text-term-fg no-underline transition-colors hover:border-term-lavender hover:text-term-lavender',
    },
    preflights: [
        {
            getCSS: () => `
html,
body,
#app {
    height: 100%;
}

body {
    font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, Thonburi, monospace;
    font-variant-ligatures: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--term-bg);
    color: var(--term-fg);
}
`,
        },
    ],
})
