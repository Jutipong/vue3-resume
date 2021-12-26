<template>
    <div :class="prop.textColor" class="title justify-center">
        <div class="about">{{ prop.title }}</div>
        <!-- <div class="wrapper"> -->
        <div class="text-wrapper">{{ prop.description }}</div>
        <!-- </div> -->
    </div>
</template>

<script lang="ts" setup>
const prop = defineProps<{
    textColor?: string;
    title: string;
    description: string;
}>();
</script>


<style scoped lang="scss">
@import "../css/constants.scss";

.title {
    text-align: center;
    color: map-get($colors, primary);
    h2 {
        font-size: 4rem;
        text-transform: uppercase;
    }
}

.about {
    font-size: 2.4rem;
    text-transform: uppercase;
}

.text-wrapper {
    text-transform: uppercase;
    &:after {
        content: "";
        width: 250px;
        display: block;
        margin: 20px auto;
        border-bottom: 1px solid red;
    }
}
</style>