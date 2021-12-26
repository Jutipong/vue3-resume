<template >
  <div :class="!$q.screen.sm && !$q.screen.xs && 'q-pl-xl q-pr-xl'" class="bg-grey-10 text-white q-pa-md q-pt-xl">
    <div class="q-pb-sm">
      <Title textColor="text-white" title="EXPERIENCE" description="PROFESSIONAL AND ACADEMIC"></Title>
    </div>
    <div class="bg-grey-10 text-white">
      <q-timeline :layout="$q.screen.sm || $q.screen.xs ? 'dense' : 'comfortable'" side="right" color="secondary">
        <q-timeline-entry heading>Timeline heading</q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="left">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 21, 1986" side="right" icon="delete">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry heading>November, 2017</q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="left" avatar="https://cdn.quasar.dev/img/avatar3.jpg">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="right">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="left" color="orange" icon="done_all">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="right">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" side="left">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Title from 'src/components/Title.vue';
</script>

<style scoped>
.ttx {
  width: 15%;
}
</style>