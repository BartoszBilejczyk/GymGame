<template lang="html">
  <v-container>
    <badge v-for="badge in badges" :badge="badge" :key="badge.info"></badge>
    <more-button :path="'achievements'"/>
  </v-container>
</template>

<script>
import Badge from './Badge'
import MoreButton from './Helpers/MoreButton'

export default {
  props: ['activeUser'],
  components: {
    Badge,
    MoreButton
  },
  computed: {
    badges() {
      return this.$store.state.badges
    }
  }
}
</script>

<style lang="scss">

</style>
