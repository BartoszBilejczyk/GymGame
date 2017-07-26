<template>
  <div id="app">
    <v-app
      height="100vh"
      id="e3"
      standalone
    >
      <v-navigation-drawer
        persistent
        light
        absolute
        :mini-variant.sync="mini"
        v-model="drawer"
        overflow
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar tag="div">
              <v-list-tile-content>
                <v-list-tile-title>GymGame</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="navigationItem in navigation" :key="navigationItem.text" :to="navigationItem.to">
              <v-list-tile-action>
                <v-icon>{{ navigationItem.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ navigationItem.text }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="white" light>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      </v-toolbar>
      <main v-cloak>
        <v-container fluid>
          <div>
            <router-view></router-view>
          </div>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    drawer: true,
    mini: false,
    right: null
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

  main {
    background: linear-gradient(135deg, #e3e5f2 0%, darken(#e3e5f2, 3) 100%);
    height: 100vh;
  }

  .list--dense .list__tile:not(.list__tile--avatar) {
    height: 60px;
  }

  .list__tile {
    padding: 0 40px;
    text-transform: uppercase;
  }

  .list__tile--avatar {
    padding: 0 20px;
  }
</style>
