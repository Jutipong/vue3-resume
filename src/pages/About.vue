<template>
    <div class="q-pt-md q-pa-md bg-grey-10 text-white">
        <Title textColor="text-white" title="ABOUT ME" description="HOPE TO KNOW YOU AFTER"></Title>
            <div class="row justify-center">
                <q-avatar size="200px">
                    <img
                        src="https://external-preview.redd.it/xc5jxmIcj-x6Do9o_a1Lwe2r6H4pDlpRBswaB46JNp4.jpg?auto=webp&s=09da2089fd90b6c7a835359553f7e74a0efc83bd"
                    />
                </q-avatar>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <Infomation />
                </div>
                <div class="col-md-4">
                    <Contact />
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import Title from '../components/Title.vue';
import Contact from '../components/Contact.vue'
import Infomation from '../components/Infomation.vue'

</script>

<style scoped lang="scss">
@import "../css/constants.scss";
</style>