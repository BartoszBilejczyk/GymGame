<template>
  <div id="app">
    <v-app
      height="100vh"
      id="e3"
      standalone
    >

      <div v-if="user">
        <navigation />
        <main v-cloak class="game-main">
          <div>
            <router-view :activeUser="user"></router-view>
          </div>
        </main>
      </div>

      <div v-else>
        <auth />
      </div>

    </v-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Auth from './components/Auth'
import firebase from 'firebase'

export default {
  name: 'app',
  components: {
    Navigation,
    Auth
  },
  computed: {
    user() {
      return this.$store.state.loggedUser
    }
  }
}
</script>

<style lang='scss'>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  //
  // .list--dense .list__tile:not(.list__tile--avatar) {
  //   height: 60px;
  // }
  //
  // .list__tile {
  //   padding: 0 40px;
  //   text-transform: uppercase;
  // }
  //
  // .list__tile--avatar {
  //   padding: 0 20px;
  // }
</style>
