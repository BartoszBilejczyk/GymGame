<template>
  <div id="app">
    <!-- <v-app
      height="100vh"
      id="e3"
      standalone
    >
      <v-navigation-drawer
        persistent
        enable-resize-watcher
        light
        absolute
        :mini-variant.sync='mini'
        v-model="drawer"
        overflow
        class="game-navigation"
      >
        <v-list class="game-navigation-list">
          <v-list-tile v-for="navigationItem in navigation" :key="navigationItem.text" :to="navigationItem.to" class="game-navigation-list__item">
              <v-list-tile-action class="game-navigation-list__item-action">
                <v-icon dark class="game-navigation-list__item-icon whiteish--text">{{ navigationItem.icon }}</v-icon>
              </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <main v-cloak class="game-main">
        <div> -->
          <router-view></router-view>
        <!-- </div>
      </main>
    </v-app> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    drawer: true,
    right: null,
    mini: true
  }),
  computed: {
    navigation() {
      return this.$store.state.navigation
    }
  }
}
</script>

<style lang='scss'>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .card {
    margin: 20px 10px;
  }

  .navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main, .navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ main {
    padding-left: 120px !important;
  }

  .game {
    &-main {
      background: rgba(0, 0, 0, 0.06);
      height: 100vh;
      max-width: calc(100vw - 120px);
      padding: 0;
    }
    &-navigation {
      margin-top: 0;
      max-height: 100vh;
      width: 120px;

      &-list {
        height: 100vh;
        padding: 0;
        background: linear-gradient(to bottom, #2f96ea 0%,#30c8ca 100%) !important;
        &__item {
          a {
            display: flex;
            justify-content: center;
            height: 80px;
          }

          a.list__tile:hover {
            background: transparent;
          }

          a.list__tile--active {
            background: linear-gradient(45deg, #57a9ec 0%, #56a6ef 100%) !important;
            .icon {
              color: white !important
            }
          }

          &-action {
            justify-content: center;
          }

          &-icon {
            font-size: 40px;
            color: white;
          }
        }
      }
    }
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
