<template>
  <div :class="!$q.screen.xs && !$q.screen.sm && 'q-ma-xl'">
    <h3>{{ name }}</h3>
    <div class="data">
      <strong>E-mail:</strong>
      {{ email }}
    </div>
    <div class="data">
      <strong>Phone:</strong>
      {{ phone }}
    </div>
  </div>
  <!-- <SocialBar :links="links"/> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const name = ref('Contact')
const email = ref<string>('Jutipong.su@outlook.com, Jutipong.sb@gmail.com')
const phone = ref<string>('0885559330 (AIS)')
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  display: block;
  border-bottom: 1px solid green;
}
</style>