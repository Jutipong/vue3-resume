<template>
    <div class="text-wrapper" :class="!$q.screen.xs && !$q.screen.sm && 'q-ma-xl'">
        <h3>Education</h3>
        <div class="data" v-for="(item,index) in datas" :key="index">
            <strong>{{ item.Title }}</strong>
            <div>{{ item.Description }}</div>
            <div>
                <strong>GPA:</strong>
                {{ item.GPA.toFixed(2) }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

type Education = {
    Title: string
    Description: string
    GPA: number
}

import { ref } from 'vue';

const datas = ref<Array<Education>>([
    {
        Title: 'BACHELOR’S DEGREE',
        Description: 'Computer Engineering, Rajamangala University of Technology Isan, Thailand.',
        GPA: 2.77
    },
    {
        Title: 'DIPLOMA',
        Description: 'Computer Technology, Rajamangala University of Technology Isan, Thailand.',
        GPA: 2.26
    },
    {
        Title: 'VOCATIONAL',
        Description: 'Electronic, Nakhon RatchasimaTechnical Collage, Thailand.',
        GPA: 3.00
    }
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

.data {
    margin-bottom: 15px;
}
</style>