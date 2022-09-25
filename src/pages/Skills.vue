<script lang="ts" setup>
import Title from '@components/Title.vue';
import { ref } from 'vue';

interface PhotoModel {
    Title: string,
    Img: string
}

const photos = ref<Array<PhotoModel>>([
    { Title: '.Net Core', Img: 'NetCore.png' },
    { Title: 'SQL Server', Img: 'SqlServer.png' },
    { Title: 'Go', Img: 'Go.png' },
    { Title: 'JavaScript', Img: 'JavaScript.png' },
    { Title: 'TypeScript', Img: 'TypeScript.png' },
    { Title: 'NodeJs', Img: 'NodeJs.png' },
    { Title: 'Vue2 / Vue3', Img: 'Vue.png' },
    { Title: 'Angular', Img: 'angular.png' },
    { Title: 'Vim', Img: 'Vim.png' },
    { Title: 'Git/Github', Img: 'Octocat.png' }]
)
</script>

<template>
    <div :class="!$q.screen.sm && !$q.screen.xs && 'q-pl-xl q-pr-xl'" class="bg-grey-10 text-white q-pa-md">
        <div class="row justify-center">
            <div class="q-ma-md">
                <Title textColor="text-white" title="SKILLS" description="HERE IS MY ARMAMENT"></Title>
            </div>
        </div>
        <div class="row items-center justify-center">
            <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pa-sm" v-for="(item, index) in photos" :key="index">
                <q-img :src="require(`@img/skills/${item.Img}`)">
                    <q-tooltip>{{ item.Title }}</q-tooltip>
                </q-img>
            </div>
        </div>
    </div>
</template>