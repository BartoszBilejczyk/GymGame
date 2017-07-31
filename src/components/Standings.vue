<template>
  <v-card>
    <v-card-text>
      <v-tabs id="standings" light centered>
        <v-tabs-bar slot="activators" class="white">
          <v-tabs-slider class="primary"></v-tabs-slider>
          <v-tabs-item v-for="user in users" :key="user.index" :href="'#standings-' + user.index">
            {{ user.text }}
          </v-tabs-item>
        </v-tabs-bar>
        <v-tabs-content
          v-for="user in users"
          :key="user.index"
          :id="'standings-' + user.index"
        >
          <v-card flat>
            <v-card-text>
              <v-layout column align-center>
                <v-progress-circular
                  class="secondary--text
                         game__progress-circle"
                  :size="200"
                  :width="15"
                  :rotate="90"
                  :value="points(user.text).total"
                >
                  {{ points(user.text).total }}
                </v-progress-circular>
                <v-layout row align-center>
                  <v-progress-circular
                    class="gameGreenMain--text
                           game__progress-circle
                           game__progress-circle--small"
                    :size="100"
                    :width="15"
                    :rotate="90"
                    :value="points(user.text).plus"
                  >
                    {{ points(user.text).plus }}
                  </v-progress-circular>
                  <v-progress-circular
                    class="red--text
                           game__progress-circle
                           game__progress-circle--small"
                    :size="100"
                    :width="15"
                    :rotate="90"
                    :value="points(user.text).minus"
                  >
                    {{ points(user.text).minus }}
                  </v-progress-circular>
                </v-layout>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>

import {db} from  '../firebase'

export default {
  name: 'standings',
  data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    points(username) {
      let total = 0
      let plus = 0
      let minus = 0
      let userFilteredActivities =  this.activitiesHistory.filter((user) => user.username === username)
      userFilteredActivities.forEach((el, index) => {
        total += userFilteredActivities[index].points
        if (userFilteredActivities[index].points > 0) {
          plus += userFilteredActivities[index].points
        } else {
          minus += userFilteredActivities[index].points
        }
      })
      return {
        total: total,
        plus: plus,
        minus: -minus
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  firebase: {
    activitiesHistory: {
      source: db.ref('activitiesHistory'),
      cancelCallback(err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang='scss'>

  .tabs__items {
    border-color: white;
  }

  .game {
    &__progress-circle {
      margin: 10px;
      font-size: 40px;
      font-weight: 600;
      &--small {
        font-size: 20px;
      }
    }
  }

</style>
