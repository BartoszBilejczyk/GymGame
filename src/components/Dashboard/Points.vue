<template lang="html">
  <v-container>
    <line-chart></line-chart>
  </v-container>
</template>

<script>
import LineChart from '../../charts/chart1'

export default {
  props: ['activeUser'],
  components: {
    LineChart
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
