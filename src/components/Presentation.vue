<template>
  <div class="row" :class="$q.platform.is.desktop && 'q-pa-lg q-ma-lg'">
    <h3>{{ title }}</h3>
    <div class="begin">{{ pres_first }}</div>
    <p>{{ pres_second }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const title = ref<string>('Who am I ?')
const pres_first = ref<string>(' I\'m a Full-Stack Developer student. Actually, I have a Licence BAC+3 in IT and I just started a computer science Master specialized in artificial intelligence and collaborative systems. IT is not only my professional background. It is also and above all a passion that has grown since I was 16 years old.')
const pres_second = ref<string>('I always liked to get into projects using the skills that I did not have or were even spare pure programming like web design, 3D modeling ect... This allowed me to learn to be autonomous and to learn on my own, certainly not without difficulties far from it, but I always managed to overcome the obstacles and solve the problems I encountered !')
</script>

<style scoped lang="scss">
@import "../css/constants.scss";
h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
}
.begin {
  color: green;
}
</style>