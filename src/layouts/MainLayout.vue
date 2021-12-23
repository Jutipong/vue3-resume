<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-light-blue-10 text-white">
      <q-tabs no-caps inline-label align="right">
        <q-btn
          v-if="!isMobile"
          flat
          dense
          class="q-ma-sm text-black"
          icon="las la-user-tie"
          label="Jutipong Subin"
          disable
        />
        <q-space></q-space>
        <q-route-tab
          :class="routerName === '' && 'text-light-green-13'"
          icon="las la-home"
          to="/"
          :label="isMobile ? '' : 'Home'"
        />
        <q-route-tab
          :class="routerName === 'Resume' && 'text-light-green-13'"
          icon="las la-terminal"
          to="/Resume"
          :label="isMobile ? '' : 'Resume'"
        />
        <q-route-tab
          :class="routerName === 'Contact' && 'text-light-green-13'"
          icon="las la-envelope"
          to="/Contact"
          :label="isMobile ? '' : 'Contact'"
        />
        <q-separator dark vertical inset />
        <q-btn
          flat
          round
          dense
          class="q-ma-sm"
          :icon="!$q.dark.isActive ? 'eva-sun-outline' : 'eva-moon-outline'"
          @click="onDarkMode"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer :class="!$q.dark.mode && 'text-black'" class="mb" align="center">
      Developed with
      <q-icon size="sm" name="las la-heartbeat" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
      <q-icon size="sm" name="lab la-vuejs" color="green" class="q-mr-sm"></q-icon>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Platform, LocalStorage, Dark } from 'quasar'
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() => Dark.set(LocalStorage.getItem('dark_mode') ?? false))
const isMobile = computed<boolean>(() => (Boolean)(Platform.is.mobile))
const onDarkMode = () => {
  Dark.toggle()
  LocalStorage.set('dark_mode', Dark.mode)
}

const routerName = computed(() => router.currentRoute.value.fullPath.replace('/', ''))
</script>

<style scoped>
.q-layout__section--marginal {
  background-color: transparent;
}

.mb {
  padding-bottom: 2px;
}
</style>