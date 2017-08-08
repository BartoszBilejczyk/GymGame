<template lang="html">
  <v-layout class="game-achievements-badge-wrapper" column align-center>
    <img class="game-achievements-badge"
         :src="'/static/images/' + badge.name + '.svg'"
         alt="">
    <p class="game-achievements-badge-name">{{ badge.name }}</p>
  </v-layout>
</template>

<script>
export default {
  props: ['badge']
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.game-achievements-badge {
  width: 60px;
  height: 60px;
  padding: 5px;

  &-wrapper {
    padding: 7px;
  }

  &-name {
    @include font(10, 600)
  }
}

</style>
