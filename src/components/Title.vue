<script setup lang="ts">
    const prop = defineProps<{
        textColor?: string
        title: string
        description: string
    }>()
</script>

<template>
    <div
        :class="prop.textColor"
        class="title">
        <div class="about">{{ prop.title }}</div>
        <div class="text-wrapper">{{ prop.description }}</div>
    </div>
</template>

<style scoped lang="scss">
    @use '@css/constants.scss' as *;

    .title {
        text-align: center;
        color: $color-primary;
    }

    .about {
        font-size: 2.4rem;
        text-transform: uppercase;
    }

    .text-wrapper {
        text-transform: uppercase;
        &:after {
            content: '';
            width: 250px;
            display: block;
            margin: 20px auto;
            border-bottom: 1px solid red;
        }
    }
</style>
