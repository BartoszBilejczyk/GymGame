<template lang="html">
  <div class="game-dashboard__card-points">
    <component-name :componentName="this.$options.name" />
    <more-button :path="'leaderboard'"/>

    <div class="game-dashboard__card-chart-wrapper">
      <line-chart class="chart" :path="'path'" :activeUser="activeUser"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from '../../charts/chart1'
import MoreButton from './Helpers/MoreButton'
import ComponentName from './Helpers/ComponentName'

export default {
  name: 'Points',
  props: ['activeUser'],
  components: {
    LineChart,
    MoreButton,
    ComponentName
  },
  computed: {
    path() {
      return 'path'
    }
  }
}
</script>

<style lang="scss">

.game-dashboard__card {
  &-points {
    position: relative;
    width: 100%;
  }

  &-chart-wrapper {
    height: 40vh;
    display: flex;
    align-items: flex-end;
  }
}

.chart {
  width: 100%;
}
</style>
