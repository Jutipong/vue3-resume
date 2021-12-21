<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-light-blue-9 text-white">
      <q-tabs no-caps inline-label align="right">
        <q-route-tab
          :class="routerName === '' && 'text-light-green-13'"
          icon="eva-home-outline"
          to="/"
          :label="isMobile ? '' : 'Home'"
        />
        <q-route-tab
          :class="routerName === 'Resume' && 'text-light-green-13'"
          icon="eva-file-text-outline"
          to="/Resume"
          :label="isMobile ? '' : 'Resume'"
        />
        <q-route-tab
          :class="routerName === 'Contact' && 'text-light-green-13'"
          icon="eva-email-outline"
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
      <q-page class="row">
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer class="bg-grey-8 text-white" align="center">
      Developed with
      <q-icon name="far fa-heart" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
      <q-icon name="fab fa-vuejs" color="green" class="q-mr-sm"></q-icon>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
      {{ isMobile }}
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