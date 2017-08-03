<template lang="html">
  <section class="game-main-data">
    <hello :activeUser="activeUser"></hello>
    <points :activeUser="activeUser"></points>
    <recipes :activeUser="activeUser"></recipes>
  </section>
</template>

<script>
import Hello from './MainData/Hello'
import Points from './MainData/Points'
import Recipes from './MainData/Recipes'

export default {
  name: 'MainData',
  props: ['activeUser'],
  components: {
    Hello,
    Points,
    Recipes
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.game-main-data {
  height: 100vh;
  width: calc(80% - 380px);
  background: pal(white);
}
</style>
