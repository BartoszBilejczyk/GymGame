<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs4 v-for="i in 3" :key="i">
        <recipe />
      </v-flex>
    </v-layout>
    <more-button :path="'recipes'"/>
  </v-container>
</template>

<script>
import Recipe from './Recipe'
import MoreButton from './Helpers/MoreButton'

export default {
  name: 'Recipes',
  props: ['activeUser'],
  components: {
    Recipe,
    MoreButton
  }
}
</script>

<style lang="scss">
</style>
