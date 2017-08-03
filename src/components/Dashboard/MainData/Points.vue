<template lang="html">
  <div class="game-main-data-points">
    <div class="container">
      <v-layout row wrap class="justify-center align-center">
        <v-flex xs4 class="justify-center align-center">
          <v-progress-circular
          class="game-main-data-points__circle"
          :size="250"
          :width="15"
          :rotate="180"
          :value="value"
          >
            {{ value }}
          </v-progress-circular>
        </v-flex>
        <v-flex xs4 class="justify-center align-center">
          <v-progress-circular
          class="game-main-data-points__circle green--text"
          :size="250"
          :width="15"
          :rotate="180"
          :value="value"
          >
            {{ value }}
          </v-progress-circular>
        </v-flex>
        <v-flex xs4 class="justify-center align-center">
          <v-progress-circular
          class="game-main-data-points__circle pink--text"
          :size="250"
          :width="15"
          :rotate="180"
          :value="value"
          >
            {{ value }}
          </v-progress-circular>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'points',
  data() {
    return {
      value: 50
    }
  }
}
</script>

<style lang="scss">

@import '../../../assets/styles/main.scss';

.game-main-data-points {
  height: calc(50vh - 190px);
  background: pal(white, light);
}
</style>
