<template lang="html">
  <div class="" style="position: relative; width: 100%;">
    <div style="width: 100%; height: 38vh">
      <line-chart class="chart" :path="'path'" :activeUser="activeUser"></line-chart>
    </div>
    <more-button style="position: absolute; top: 0; right: 20px" :path="'leaderboard'"/>
  </div>
</template>

<script>
import LineChart from '../../charts/chart1'
import MoreButton from './Helpers/MoreButton'

export default {
  props: ['activeUser'],
  components: {
    LineChart,
    MoreButton
  },
  computed: {
    path() {
      return 'path'
    }
  }
}
</script>

<style lang="scss">
</style>
