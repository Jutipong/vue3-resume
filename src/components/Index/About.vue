<template>
    <div class="wrapper">
        <div class="title">
            <div class="about">ABOUT ME</div>
            <!-- <div class="wrapper"> -->
            <div class="text-wrapper">HOPE TO KNOW YOU AFTER</div>
            <!-- </div> -->
        </div>

        <!-- <AnimateOnVisible name="fadeRight" :duration="1"> -->
        <div class="section-content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <!-- <Photo :user="user"/> -->
                </div>
                <!-- <div class="row">
                        <div class="col-md-7 mr-auto card-mobile">
                            <Presentation :content="content"/>
                        </div>
                        <div class="col-md-4 card-mobile">
                            <PersonnalCard :user="user" :links="links"/>
                        </div>
                </div>-->
            </div>
        </div>
        <!-- </AnimateOnVisible> -->
    </div>
</template>

<script lang="ts" setup>
// import Title from './Title.vue'
// import PersonnalCard from './PersonnalCard.vue'
// import Presentation from './Presentation.vue'
// import Photo from './Photo.vue'

// export default {
    // name: 'AboutMe',
    // props: ['user', 'content', 'links'],
    // components: {
    //     Title,
    //     PersonnalCard,
    //     Presentation,
    //     Photo
    // },
// }
</script>

<style scoped lang="scss">
@import "../../css/constants.scss";

.wrapper {
    padding-top: 40px;
    margin-bottom: 40px;
}
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
// .title {
//     text-align: center;
//     color: map-get($colors, primary);
//     h2 {
//         font-size: 4rem;
//         text-transform: uppercase;
//     }
// }

// .text-wrapper {
//     text-transform: uppercase;
//     &:after {
//         content: "";
//         width: 150px;
//         display: block;
//         margin: 20px auto;
//         border-bottom: 1px solid map-get($colors, primary);
//     }
// }

// #about {
// background-color: lighten(map-get($colors, dark), 100%);
// background-color:
// }

// @media (min-width: #{map-get($breakpoints, medium)}) {
//     .section-content {
//         width: 80%;
//         margin: 0 auto;
//     }
// }

// @media (max-width: #{map-get($breakpoints, medium)}) {
//     .card-mobile {
//         text-align: center !important;
//         margin-top: 20px;
//     }
// }
</style>