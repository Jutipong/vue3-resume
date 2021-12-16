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
        <q-route-tab to="/page1" label="HOME" />
        <q-route-tab to="/page2" label="RESUME" />
        <q-route-tab to="/page3" label="CONTACT" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <!-- <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>-->
    </q-footer>
  </q-layout>
</template>