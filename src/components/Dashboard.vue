<template lang="html">
  <v-container class="game-dashboard">
    <v-layout row wrap>
      <v-flex xs4>
        <v-card class="game-dashboard__card" height="40vh">
          <profile :activeUser="activeUser"/>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card class="game-dashboard__card" height="40vh">
          <points :activeUser="activeUser"/>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card class="game-dashboard__card" height="40vh">
          <achievements :activeUser="activeUser"/>
        </v-card>
      </v-flex>
      <v-flex xs7>
        <v-card class="game-dashboard__card" height="40vh">
          <activity :activeUser="activeUser"/>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card class="game-dashboard__card" height="40vh">
          <recipes :activeUser="activeUser"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Profile from './Dashboard/Profile'
import Points from './Dashboard/Points'
import Achievements from './Dashboard/Achievements'
import Activity from './Dashboard/Activity'
import Recipes from './Dashboard/Recipes'

export default {
  name: 'Dashboard',
  props: ['activeUser'],
  components: {
    Profile,
    Points,
    Achievements,
    Activity,
    Recipes
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';


/* OTHER STYLES */

.game-dashboard {

  &__card {
    margin: 20px 15px;
    box-shadow: 0 42px 64px 0 rgba(69, 69, 86, 0.09);
    transition: 0.4s;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 42px 64px 0 rgba(69, 69, 86, 0.16);
    }
  }
}
</style>
