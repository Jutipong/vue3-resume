<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-primary text-white" height-hint="98">
      <!-- <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>Title
        </q-toolbar-title>
      </q-toolbar>-->

      <q-tabs align="center">
        <q-route-tab to="/#" label="HOME" />
        <q-route-tab to="/page2" label="EXPERIENCE" />
        <q-route-tab to="/page2" label="SKILL" />
        <q-route-tab to="/page3" label="CONTACT" />
      </q-tabs>

      <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"></div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white" align="center">
      Developed with
      <q-icon name="far fa-heart" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
      <q-icon name="fab fa-vuejs" color="green" class="q-mr-sm"></q-icon>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar()
// $q.dark.set(false)
// $q.dark.toggle()
</script>