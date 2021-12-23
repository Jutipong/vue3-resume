<template>
    <div class="wrapper">
        <Home></Home>
        <About></About>
    </div>
</template>

<script lang="ts" setup>
import Home from '../components/Home/Home.vue';
import About from '../components/Home/About.vue';

</script>


<style scoped lang="scss">
@import "../css/constants.scss";

// #app {
//     font-family: Montserrat-Regular, serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     color: #2c3e50;
// }

.wrapper {
    height: 100%;
}

*, *:before, *:after {
    box-sizing: none;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
}
</style>