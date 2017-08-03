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
  methods: {
    // update() {
    //   firebase.auth().currentUser.updateProfile({
    //     photoURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-1/p320x320/12227656_1259035110789438_3793099693083002720_n.jpg?oh=2f4e1e29af1b66f8a7dbb2ef43ef0dfa&oe=59FA3F86"
    //   }).then(function() {
    //     // Update successful.
    //   }).catch(function(error) {
    //     // An error happened.
    //   });
    // }
  }
}
</script>

<style lang="scss">

@import '../../../styles/main.scss';

.game-vitals-photo-wrapper {
  height: calc(16.667vw - 120px/6);
  background: pal(white, dark);
}

img {
  width: 100%;
}
</style>
