<script lang="ts" setup>
import Title from '@components/Title.vue';
import Contact from '@components/Contact.vue'
import Personal from '@components/Personal.vue'
import Education from '@components/Education.vue';
import Certification from '@components/Certification.vue';
</script>

<template>
    <div class="q-pt-xl q-pa-md bg-grey-10 text-white">
        <Title textColor="text-white" title="ABOUT ME" description="HOPE TO KNOW YOU AFTER"></Title>
        <div class="row justify-center">
            <q-avatar size="220px">
                <q-img :src="require(`@img/me.png`)">
                </q-img>
            </q-avatar>
        </div>
        <div class="row">
            <div class="col-md-6">
                <Personal />
                <Certification />
                <Contact />
            </div>
            <div class="col-md-6">
                <Education />
            </div>
        </div>
    </div>
</template>