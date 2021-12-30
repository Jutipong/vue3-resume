<script lang="ts" setup>
type ExperienceModel = {
  Company: string
  Date: string
  Position: string
  Description?: string
}

import { ref } from 'vue';
import Title from 'src/components/Title.vue';

const datas = ref<Array<ExperienceModel>>([
  {
    Company: 'ADI Resourcing Co., Ltd.',
    Date: '06/2021 - Present',
    Position: 'Golang Developer',
    Description: 'OnSite: Krung Thai Bank Public Co.,Ltd.'
  },
  {
    Company: 'Thai Credit Retail Bank Public Co.,Ltd.',
    Date: '10/2019 - 05/2021 (1.8Y)',
    Position: 'Position: .NET Developer'
  },
  {
    Company: 'Azure Computers (Thailand) Co., Ltd.',
    Date: '03/2019 - 09/2019 (7M)',
    Position: '.NET Developer',
    Description: 'OnSite: Krung Thai Bank Public Co.,Ltd.'
  },
  {
    Company: 'TP Consulting and Recruitment Co., Ltd.',
    Date: '10/2017 - 02/2019 (1.5Y)',
    Position: 'Position: .NET Developer',
    Description: 'OnSite: Kiatnakin Phatra Bank Public Co.,Ltd.'
  },
  {
    Company: 'Cube SoftTech Co., Ltd.',
    Date: '03/2017 - 09/2017 (7M)',
    Position: '.NET(Web) Developer',
    Description: 'OnSite: Krung Thai Bank Public Co.,Ltd.'
  },
  {
    Company: 'Simat Technologies Public Co.,Ltd.',
    Date: '01/2014 - 02/2017 (2.4Y)',
    Position: '.NET(Web) Developer',
  },
  {
    Company: 'Speed Plus Soft',
    Date: '09/2011 - 02/2012 (6M)',
    Position: '.NET(Web) Developer',
  },
])
</script>

<template >
  <div :class="!$q.screen.sm && !$q.screen.xs && 'q-pl-xl q-pr-xl'" class="bg-grey-10 text-white q-pa-md q-pt-xl">
    <div class="q-pb-sm">
      <Title textColor="text-white" title="EXPERIENCE" description="PROFESSIONAL AND ACADEMIC"></Title>
    </div>
    <div class="bg-grey-10 text-white">
      <q-timeline :layout="$q.screen.sm || $q.screen.xs ? 'dense' : 'comfortable'" side="right" color="secondary">
        <q-timeline-entry v-for="(item, index) in datas" :key="index" :title="item.Company" :subtitle="item.Date" color="orange" side="left">
          <div>
            <u>Position:</u>
            {{ item.Position }}
          </div>
          <div v-if="item.Description">
            <u>Description:</u>
            {{ item.Description }}
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>