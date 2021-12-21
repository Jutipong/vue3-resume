<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-light-blue-9 text-white">
      <!-- <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>Title
        </q-toolbar-title>
      </q-toolbar>-->

      <q-tabs no-caps inline-label align="center">
        <q-route-tab icon="eva-home-outline" to="/" exact label="HOME" />
        <q-route-tab icon="eva-file-text-outline" to="/Resume" label="RESUME" />
        <q-route-tab icon="eva-email-outline" to="/Contact" label="CONTACT" />
      </q-tabs>
      <!-- <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"></div> -->
    </q-header>

    <q-page-container>
      <!-- page container -->
      <q-page class="row bg-grey-4">
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <router-view />
        </transition>
      </q-page>
      <!-- page container end -->
    </q-page-container>

    <q-footer class="bg-grey-8 text-white" align="center">
      Developed with
      <q-icon name="far fa-heart" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
      <q-icon name="fab fa-vuejs" color="green" class="q-mr-sm"></q-icon>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">

</script>