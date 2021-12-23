<template>
    <div class="q-ma-lg">
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
                    <img src="../assets/img/photo.jpeg" />
                </q-avatar>
            </div>
            <div class="row">
                <div class="col-md-7 mr-auto card-mobile">
                    <Presentation />
                </div>
                <div class="col-md-4 card-mobile">
                    <PersonnalCard />
                </div>
            </div>
        </div>
        <!-- </AnimateOnVisible> -->
    </div>
</template>

<script lang="ts" setup>
// import Title from './Title.vue'
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