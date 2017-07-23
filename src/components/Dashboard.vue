<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 md4>
      <add />
      <standings />
    </v-flex>
    <v-flex xs12 md4>
      <history />
    </v-flex>
    <v-flex xs12 md4>
      <add />
      <standings />
    </v-flex>
  </v-layout>
</template>

<script>
import Add from './Add'
import Standings from './Standings'
import History from './History'
export default {
  name: 'Dashboard',
  components: {
    Add,
    Standings,
    History
  }
}
</script>

<style lang="scss">
</style>
