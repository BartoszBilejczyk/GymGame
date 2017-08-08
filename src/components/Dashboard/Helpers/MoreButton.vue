<template lang="html">
  <router-link :to="path" tag="div">
    <div class="game-view-more">
      <a class="game-view-more-link grey--text lighten-5">view more<v-icon class="grey--text lighten-5">keyboard_arrow_right</v-icon></a>

    </div>
  </router-link>
</template>

<script>
export default {
  props: ['activeUser', 'path']
}
</script>

<style lang="scss">

.game-view-more {
  position: absolute;
  top: 15px;
  right: 5px;
  &-link {
    text-decoration: none;
  }
}

</style>
