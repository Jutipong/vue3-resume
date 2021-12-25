<template>
    <div class="row justify-center">
        <div class="q-ma-md">
            <Title title="SKILLS" description="HERE IS MY ARMAMENT"></Title>
            <div class="row items-center">
                <div class="q-ma-md" v-for="(item, index) in photos" :key="index">
                    <q-img class="q-ma-lg" :src="require(`../assets/img/logo/${item.Img}`)">
                        <q-tooltip>{{ item.Title }}</q-tooltip>
                    </q-img>
                </div>
            </div>
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
    { Title: 'C', Img: 'C.png' },
    { Title: 'C++', Img: 'cplusplus.png' },
    { Title: 'C#', Img: 'Csharp.png' },
    { Title: 'Java', Img: 'java.png' },
    { Title: 'Unity', Img: 'unity.png' },
    { Title: 'HTML', Img: 'html.png' },
    { Title: 'CSS', Img: 'css.png' },
    { Title: 'PHP', Img: 'php.png' },
    { Title: 'VueJS', Img: 'vuejs.png' },
    { Title: 'Android', Img: 'android.png' },
    { Title: 'Linux', Img: 'linux.png' },
    { Title: 'Git/Github', Img: 'Octocat.png' },
    { Title: 'Go', Img: 'go.png' },
    { Title: 'VPS/Web Hosting', Img: 'ovh.png' }])

</script>
