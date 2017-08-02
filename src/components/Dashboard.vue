<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 lg3 class="pa-4">
      <add />
      <standings />
    </v-flex>
    <v-flex xs12 lg5 class="pa-4">
      <history />
    </v-flex>
    <v-flex xs12 lg4 class="pa-4">
      <budget />
      <additional-features />
    </v-flex>
  </v-layout>
</template>

<script>
import Add from './Add'
import Standings from './Standings'
import History from './History'
import Budget from './Budget'
import AdditionalFeatures from './AdditionalFeatures'

export default {
  name: 'Dashboard',
  components: {
    Add,
    Standings,
    History,
    Budget,
    AdditionalFeatures
  }
}
</script>

<style lang="scss">
</style>
