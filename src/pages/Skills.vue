<script lang="ts" setup>
interface PhotoModel {
    Title: string,
    Img: string
}

import Title from '../components/Title.vue';
import { ref } from 'vue';

const photos = ref<Array<PhotoModel>>([
    { Title: '.Net Core', Img: 'core.png' },
    { Title: 'Entity', Img: 'entity.png' },
    { Title: 'SQL Server', Img: 'sql-server.png' },//sqlserver
    { Title: 'Oracle', Img: 'oracle.png' },
    { Title: 'SQLite', Img: 'sqlite.png' },
    { Title: 'Go', Img: 'go.png' },
    { Title: 'Go Fiber', Img: 'go-fiber.png' },
    { Title: 'Go Gin', Img: 'go-gin.png' },
    { Title: 'JavaScript', Img: 'javascript.png' },
    { Title: 'TypeScript', Img: 'typescript.png' },
    { Title: 'NodeJs', Img: 'nodejs.png' },
    { Title: 'NestJs', Img: 'nest.svg' },
    { Title: 'Vue2 / Vue3', Img: 'vue.png' },
    { Title: 'Nuxt', Img: 'nuxt.png' },
    { Title: 'Quasar', Img: 'quasar.png' },
    { Title: 'Vuetify', Img: 'vuetify.png' },
    { Title: 'Boostrap', Img: 'bootstrap.png' },
    { Title: 'HTML', Img: 'html.png' },
    { Title: 'CSS', Img: 'css.png' },
    { Title: 'Git/Github', Img: 'octocat.png' },
    { Title: 'Vim', Img: 'vim.png' }]
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
                <q-img :src="require(`assets/img/logo/${item.Img}`)">
                    <q-tooltip>{{ item.Title }}</q-tooltip>
                </q-img>
            </div>
        </div>
    </div>
</template>