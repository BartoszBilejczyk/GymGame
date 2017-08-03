<template lang="html">
  <section class="game-vitals">
    <user-photo :activeUser="activeUser"></user-photo>
    <user-vitals></user-vitals>
  </section>
</template>

<script>
import UserPhoto from './Vitals/UserPhoto'
import UserVitals from './Vitals/UserVitals'

export default {
  name: 'Vitals',
  props: ['activeUser'],
  components: {
    UserPhoto,
    UserVitals
  }
}
</script>

<style lang="scss">

@import '../../styles/main.scss';

.game-vitals {
  height: 100vh;
  background: pal(gray);
}
</style>
