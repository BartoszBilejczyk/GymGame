<template lang="html">
  <div class="game-main-data-recipes">
    <recipes-item></recipes-item>
  </div>
</template>

<script>
import RecipesItem from './RecipesItem'

export default {
  name: 'Recipes',
  components: {
    RecipesItem
  }
}
</script>

<style lang="scss">

@import '../../../styles/main.scss';

.game-main-data-recipes {
  height: 30vh;
  background: pal(white, 'light-dark');
}
</style>
