<template>
    <div class="bg-grey-12">
        <div class="q-pa-lg">
            <div class="title">
                <div class="about">ABOUT ME</div>
                <!-- <div class="wrapper"> -->
                <div class="text-wrapper">HOPE TO KNOW YOU AFTER</div>
                <!-- </div> -->
            </div>

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
                        <Presentation />
                    </div>
                    <div class="col-md-4">
                        <PersonnalCard />
                    </div>
                </div>
            </div>
            <!-- </AnimateOnVisible> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import PersonnalCard from '../components/PersonnalCard.vue'
import Presentation from '../components/Presentation.vue'

</script>

<style scoped lang="scss">
@import "../css/constants.scss";

.title {
    text-align: center;
    color: map-get($colors, primary);
    h2 {
        font-size: 4rem;
        text-transform: uppercase;
    }
}

.about {
    font-size: 2.4rem;
    text-transform: uppercase;
}

.text-wrapper {
    text-transform: uppercase;
    &:after {
        content: "";
        width: 150px;
        display: block;
        margin: 20px auto;
        border-bottom: 1px solid map-get($colors, primary);
    }
}
</style>