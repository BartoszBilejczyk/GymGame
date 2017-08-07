<template lang="html">
  <v-layout justify-center>
    <router-link :to="path" tag="div">
      <v-btn class="white">Read more</v-btn>
    </router-link>
  </v-layout>
</template>

<script>
export default {
  props: ['activeUser', 'path']
}
</script>

<style lang="scss">
</style>
