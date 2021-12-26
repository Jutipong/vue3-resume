<template>
    <div class="bg-grey-12">
        <div class="q-pa-lg">
            <Title title="ABOUT ME" description="HOPE TO KNOW YOU AFTER"></Title>

            <!-- <AnimateOnVisible name="fadeRight" :duration="1"> -->
            <div class="section-content">
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
            <!-- </AnimateOnVisible> -->
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