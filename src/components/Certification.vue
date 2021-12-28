<template>
    <div :class="!$q.screen.xs && !$q.screen.sm && 'q-ma-xl'">
        <h3>{{ title }}</h3>
        <div v-for="(item,index) in datas" :key="index">
            <div>{{ item }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const title = ref<string>('Certification')
const datas = ref<Array<string>>([
    'MCSD: Web Applications',
    'MCPS: Microsoft Certified Professional',
    'Programming in HTML5 with JavaScript and CSS3'
])

</script>

<style scoped lang="scss">
h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    border-bottom: 1px solid green;
}
</style>