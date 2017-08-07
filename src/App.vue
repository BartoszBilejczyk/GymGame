<template>
  <div id="app">
    <v-app
      height="100vh"
      id="e3"
      standalone
    >
      <div v-if="user">
        <header-navigation :activeUser="user"/>
        <main v-cloak class="game-main-wrapper">
          <sidebar-navigation :activeUser="user"/>
          <div class="game-main">
            <transition name="fade" mode="out-in">
              <router-view :activeUser="user"></router-view>
            </transition>
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
import HeaderNavigation from './components/HeaderNavigation'
import SidebarNavigation from './components/SidebarNavigation'
import Auth from './components/Auth'
import firebase from 'firebase'

export default {
  name: 'app',
  components: {
    HeaderNavigation,
    SidebarNavigation,
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

@import './assets/styles/main.scss';

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.game-main {
  width: calc(100vw - 140px);

  &-wrapper {
    display: flex;
  }
}

.btn {
  border-radius: 20px;
  box-shadow: 0 4px 20px 0 rgba(69, 69, 86, 0.12);
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
