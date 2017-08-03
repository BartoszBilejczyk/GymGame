<template lang="html">
  <div class="game-main-data-recipes">
    <div class="container">
      <recipes-item></recipes-item>
    </div>
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

@import '../../../assets/styles/main.scss';

.game-main-data-recipes {
  height: calc(50vh - 190px);
  background: pal(white, 'light-dark');
}
</style>
