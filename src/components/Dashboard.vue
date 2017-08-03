<template lang="html">
  <div class="v-container-fluid">
    <v-layout row wrap>
      <v-flex xs2>
        <vitals :activeUser="activeUser"></vitals>
      </v-flex>

      <v-flex xs8>
        <main-data :activeUser="activeUser"></main-data>
      </v-flex>

      <v-flex xs2>
        <activity :activeUser="activeUser"></activity>
      </v-flex>
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

@import '../styles/main.scss';


/* OTHER STYLES */

.layout .flex {
  padding: 0;
}
</style>
