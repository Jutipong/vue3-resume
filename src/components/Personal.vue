<template>
  <div class="items-start" :class="!$q.screen.xs && !$q.screen.sm && 'q-ma-xl'">
    <h3>{{ title }}</h3>
    <div class="data">
      <strong>Nationality:</strong>
      {{ nationality }}
    </div>
    <div class="data">
      <strong>Height:</strong>
      {{ height }}
    </div>
    <div class="data">
      <strong>Weight:</strong>
      {{ weight }}
    </div>
    <div class="data">
      <strong>Birth Date:</strong>
      {{ birthDate }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const title = ref<string>('Personal')
const nationality = 'Thai'
const height = 168
const weight = 68
const birthDate = 'Jan 20 1988'
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  display: block;
  border-bottom: 1px solid green
}
</style>