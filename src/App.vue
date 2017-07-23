<template>
  <div id="app">
    <!-- <ul class="gymgame-nav">
      <li class="gymgame-nav__item"><router-link to="/add">add</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/">navigation</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/standings">standings</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/history">history</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/budget">budget</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/additional-features">additional-features</router-link></li>
    </ul> -->
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
          <v-list-tile v-for="item in items" :key="item.text" :to="item.to">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="indigo darken-4" dark>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Toolbar</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <v-layout>
            <router-view></router-view>
          </v-layout>
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
    items: [
      { icon: 'lightbulb_outline', text: 'Dashboard', to: '/'},
      { icon: 'lightbulb_outline', text: 'Standings', to: '/standings'},
      { icon: 'touch_app', text: 'History', to: '/history'},
      // { divider: true },
      { icon: 'archive', text: 'Budget', to: '/budget'},
      { icon: 'delete', text: 'Additional Features', to: '/additional-features'}
    ],
    mini: false,
    right: null
  })
}
</script>

<style lang='scss'>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
