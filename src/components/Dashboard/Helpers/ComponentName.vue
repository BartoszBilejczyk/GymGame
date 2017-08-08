<template lang="html">
  <div class="game-component-name">
    <h2 class="game-component-name__heading">{{ componentName }}</h2>
  </div>
</template>

<script>
export default {
  props: ['componentName']
}
</script>

<style lang="scss">

@import '../../../assets/styles/main.scss';

.game-component-name {
  position: absolute;
  top: 15px;
  left: 15px;

  &__heading {
    @include font(12, 600);
    color: pal(navy, light);
    text-transform: uppercase;
    letter-spacing: 0.7px;
  }
}
</style>
