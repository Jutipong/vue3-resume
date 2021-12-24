<template>
  <div :class="$q.platform.is.desktop && 'q-pa-lg q-ma-lg'">
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
const name = ref('Jutipong Subin')
const email = ref<string>('jutipong.su@outlook.com, jutipong.sb@gmail.com')
const phone = ref<string>('0885559330 (AIS)')
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
}

.data {
  margin-bottom: 15px;
}
</style>