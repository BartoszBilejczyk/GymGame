<template lang="html">
  <div class="game-vitals-photo-wrapper">
    <img :src="activeUser.photoURL" alt="">
    <!-- <v-btn @click="update()">Update Photo</v-btn> -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'UserPhoto',
  props: ['activeUser'],
  computed: {
  }
}
</script>

<style lang="scss">

@import '../../../assets/styles/main.scss';

.game-vitals {

  &-photo-wrapper {
    height: 380px;
    background: pal(white, dark);
  }
}

img {
  width: 100%;
}
</style>
