<template lang="html">
  <div class="game-header-navigation-wrapper">
    <v-layout align-center justify-space-between
              class="game-header-navigation">
      <img class="game-header-navigation__logo" src="../assets/images/logo.jpg" alt="GymGame logo">
      <div class="game-header-navigation-main">
        <v-btn primary>Add activity</v-btn>
        <v-layout align-center class="game-header-navigation-main-user">
          <span>Hi, <span class="game-header-navigation-main-user__name">{{ firstName }}</span></span>
          <img class="game-header-navigation-main-user__photo" :src="activeUser.photoURL" alt="">
        </v-layout>
        <v-layout align-center>
          <span>Log Out</span>
          <v-icon class="game-header-navigation-main-logout"
                  large
                  @click="signOut()">power_settings_new</v-icon>
        </v-layout>
      </div>
    </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HeaderNavigation',
  props: ['activeUser'],
  computed: {
    firstName() {
      return this.activeUser.displayName.split(' ')[0]
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut()
      this.$store.dispatch('logoutUser', null)
      this.$router.push('/')
      // .then(() => {
      //   this.user = null
      // }).catch(err => console.log(error))
    }
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.game-header-navigation {

  &-wrapper {
    background: white;
    border-bottom: 1px solid #ddd;
    @include font(13, 300);
    height: 80px;
    padding-right: 3%;
  }

  &__logo {
    width: 80px;
    height: 80px;
    padding: 10px;
  }

  &-main {
    display: flex;
    align-items: center;

    > * {
      margin: 0 30px;
    }

    &-user {
      &__photo {
        height: 50px;
        width: 50px;
        border-radius: 30px;
        margin-left: 20px;
      }

      &__name {
        font-weight: 500;
      }
    }

    &-logout {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}

</style>
