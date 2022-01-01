<template>
  <q-layout view="hHh lpR fff">
    <!-- <q-header reveal class="bg-light-blue-10 text-white">
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
    </q-header>-->

    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[20, 20]">
        <q-btn fab icon="las la-file-download" color="positive" href="https://www.cakeresume.com/pdf/s--UdGtXJ9Yonm0BoqC-I0JuA--/xaJ1R.pdf">
          <q-tooltip>Download Resume</q-tooltip>
        </q-btn>
      </q-page-sticky>

      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="100" :offset="[20, 90]">
        <q-btn fab icon="las la-angle-double-up" color="primary" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-grey-10 text-white" style="font-weight: 400" :align="$q.platform.is.mobile ? 'center' : 'right'">
      Developed with
      <q-icon size="sm" name="las la-heartbeat" color="pink" class="q-mr-sm q-ml-sm"></q-icon>+
      <q-icon size="sm" name="lab la-vuejs" color="green" class="q-mr-sm"></q-icon>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
</script>