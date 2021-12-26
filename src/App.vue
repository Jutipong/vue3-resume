<template>
  <div class="wrapper" id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>



<style scoped lang="scss">
@import "./css/constants.scss";

// @font-face {
//   font-family: customfont;
//   src: url(./assets/fonts/Montserrat-Regular.ttf);
// }

#app {
  // font-family: Montserrat-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
}
</style>
