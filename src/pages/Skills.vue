<template>
    <div class="row justify-center">
        <div class="q-ma-md">
            <Title title="SKILLS" description="HERE IS MY ARMAMENT"></Title>
        </div>
    </div>
    <div class="row q-ma-md items-center justify-center">
        <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pa-sm" v-for="(item, index) in photos" :key="index">
            <q-img :src="require(`../assets/img/logo/${item.Img}`)">
                <q-tooltip>{{ item.Title }}</q-tooltip>
            </q-img>
        </div>
    </div>
</template>

<script lang="ts" setup>

type PhotoModel = {
    Title: string,
    Img: string
}

import Title from '../components/Title.vue';
import { ref } from 'vue';

const photos = ref<Array<PhotoModel>>([
    { Title: '.Net Core', Img: 'NetCore.png' },
    { Title: 'Entity', Img: 'Ef.png' },
    { Title: 'SQL Server', Img: 'SqlServer.png' },
    { Title: 'Oracle', Img: 'Oracle.png' },
    { Title: 'SQLite', Img: 'SQLite.png' },
    { Title: 'Go', Img: 'Go.png' },
    { Title: 'Go Fiber', Img: 'GoFiber.png' },
    { Title: 'Go Gin', Img: 'GoGin.png' },
    { Title: 'JavaScript', Img: 'JavaScript.png' },
    { Title: 'TypeScript', Img: 'TypeScript.png' },
    { Title: 'NodeJs', Img: 'NodeJs.png' },
    { Title: 'NestJs', Img: 'NestJs.svg' },
    { Title: 'Vue2 / Vue3', Img: 'VueJs.png' },
    { Title: 'Nuxt', Img: 'Nuxt.png' },
    { Title: 'VueX', Img: 'Vuex.jpeg' },
    { Title: 'Quasar', Img: 'Quasar.png' },
    { Title: 'Vuetify', Img: 'Vuetify.png' },
    { Title: 'Boostrap', Img: 'Bootstrap.png' },
    { Title: 'HTML', Img: 'Html.png' },
    { Title: 'CSS', Img: 'Css.png' },
    { Title: 'Git/Github', Img: 'Octocat.png' }]
)
</script>

