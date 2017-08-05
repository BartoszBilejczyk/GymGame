<template lang="html">
  <v-container>
    <badge v-for="badge in badges" :badge="badge" :key="badge.info"></badge>
  </v-container>
</template>

<script>
import Badge from './Badge'
export default {
  props: ['activeUser'],
  components: {
    Badge
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
