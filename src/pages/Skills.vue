<script setup lang="ts">
    import Title from '@components/Title.vue'

    interface PhotoModel {
        Title: string
        Img: string
    }

    const skillImages = import.meta.glob('../assets/img/skills/*.{png,svg}', { eager: true, import: 'default' }) as Record<string, string>

    const skillIcons: Record<string, string> = {}
    for (const [path, src] of Object.entries(skillImages)) {
        skillIcons[path.split('/').pop() ?? path] = src
    }

    const photos: PhotoModel[] = [
        { Title: '.NET Core', Img: 'NetCore.png' },
        { Title: 'SQL Server', Img: 'SqlServer.png' },
        { Title: 'Go', Img: 'Go.png' },
        { Title: 'JavaScript', Img: 'JavaScript.png' },
        { Title: 'TypeScript', Img: 'TypeScript.png' },
        { Title: 'Node.js', Img: 'NodeJs.png' },
        { Title: 'Vue 2 / Vue 3', Img: 'Vue.png' },
        { Title: 'Angular', Img: 'angular.png' },
        { Title: 'Vim', Img: 'Vim.png' },
        { Title: 'Git/GitHub', Img: 'Octocat.png' },
    ]
</script>

<template>
    <div class="bg-grey-10 p-4 text-white lg:px-12">
        <div class="flex flex-wrap justify-center">
            <div class="m-4">
                <Title
                    title="SKILLS"
                    description="HERE IS MY ARMAMENT"
                    textColor="text-white" />
            </div>
        </div>
        <div class="flex flex-wrap items-center justify-center">
            <div
                v-for="(item, index) in photos"
                :key="index"
                class="w-1/6 p-2 md:w-1/12">
                <img
                    :src="skillIcons[item.Img]"
                    :alt="item.Title"
                    :title="item.Title"
                    class="h-auto w-full" />
            </div>
        </div>
    </div>
</template>
