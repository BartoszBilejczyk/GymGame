<template>
  <v-card>
    <v-card-text>
      <v-tabs id="standings" fixed light centered>
        <v-tabs-bar slot="activators" class="white">
          <v-tabs-slider class="primary"></v-tabs-slider>
          <v-tabs-item v-for="user in users" :key="user.index" :href="'#standings-' + user.index" class="primary--text">
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
                  :size="200"
                  :width="15"
                  :rotate="-90"
                  :value="points(user.text).total"
                  class="green--text"
                >
                  {{ points(user.text).total }}
                </v-progress-circular>
                <v-layout row align-center>
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="-90"
                    :value="points(user.text).plus"
                    class="green--text"
                  >
                    {{ points(user.text).plus }}
                  </v-progress-circular>
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="-90"
                    :value="points(user.text).minus"
                    class="red--text"
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
      let total = null
      let plus = null
      let minus = null
      let userFilteredActivities =  this.activitiesHistory.filter(function(user) {
        return user.username === username
      })
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

  .tabs__items {
    border-color: white;
  }

  .progress-circular {
    margin: 10px;
  }

</style>
