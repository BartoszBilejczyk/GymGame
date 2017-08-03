<template lang="html">
  <section class="game-activity">
    {{ activeUser.email }}
  </section>
</template>

<script>
export default {
  name: 'Activity',
  props: ['activeUser']
}
</script>

<style lang="scss">

@import '../../styles/main.scss';

.game-activity {
  height: 100vh;
}
</style>
