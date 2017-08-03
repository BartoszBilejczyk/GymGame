<template lang="html">
  <div class="v-container-fluid">
    <v-layout row wrap>
      <vitals :activeUser="activeUser"></vitals>
      <main-data :activeUser="activeUser"></main-data>
      <activity :activeUser="activeUser"></activity>
    </v-layout>
  </div>
</template>

<script>

import Vitals from './Dashboard/Vitals'
import MainData from './Dashboard/MainData'
import Activity from './Dashboard/Activity'

export default {
  name: 'Dashboard',
  props: ['activeUser'],
  components: {
    Vitals,
    MainData,
    Activity
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';


/* OTHER STYLES */

.layout .flex {
  padding: 0;
}
</style>
