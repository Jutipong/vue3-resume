<script setup lang="ts">
    import Certification from '@components/Certification.vue'
    import Contact from '@components/Contact.vue'
    import Education from '@components/Education.vue'
    import Personal from '@components/Personal.vue'
    import Title from '@components/Title.vue'
    import profileMe from '@img/profile-me.png'
</script>

<template>
    <div class="bg-grey-10 p-4 pt-12 text-white">
        <Title
            title="ABOUT ME"
            description="HOPE TO KNOW YOU AFTER"
            textColor="text-white" />
        <div class="flex flex-wrap justify-center">
            <div class="h-[200px] w-[200px] overflow-hidden rounded-full">
                <img
                    :src="profileMe"
                    alt="Jutipong Subin"
                    class="h-full w-full object-cover" />
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
                <Personal />
                <Certification />
                <Contact />
            </div>
            <div class="w-full md:w-1/2">
                <Education />
            </div>
        </div>
    </div>
</template>
