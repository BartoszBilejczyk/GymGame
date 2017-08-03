<template lang="html">
  <div class="game-main-data-hello">
    Hello
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: 'ActiveUser'
}
</script>

<style lang="scss">

@import '../../../styles/main.scss';

.game-main-data-hello {
  height: 30vh;
  background: pal(white, x-light);
}
</style>
