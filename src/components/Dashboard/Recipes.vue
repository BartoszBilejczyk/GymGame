<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs4 v-for="i in 3" :key="i">
        <recipe />
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn>Zobacz pozostałe</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Recipe from './Recipe'
export default {
  name: 'Recipes',
  props: ['activeUser'],
  components: {
    Recipe
  }
}
</script>

<style lang="scss">
</style>
