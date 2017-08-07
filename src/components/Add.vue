<template>
  <v-layout row justify-center style="position: relative;">
    <v-dialog v-model="dialog" lazy absolute>
      <v-btn primary dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title>
          <h1 class="gymgame-add__card-title">Dodaj aktywność</h1>
        </v-card-title>
        <v-card-text>
          <v-select
            :items="users"
            v-model="selectedUser"
            label="Wybierz osobę"
            item-value="text"
          ></v-select>
          <v-select
            :items="activitiesOptions"
            v-model="selectedActivity"
            label="Wybierz aktywność"
            item-value="text"
          ></v-select>
          <div class="">
            <v-btn
              @click="addActivity()"
              success
              block
              :loading="loading4"
              class="text-xs-center">
              Dodaj aktywność
              <span slot="loader" class="custom-loader">
                <v-icon dark>cached</v-icon>
              </span>
            </v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      :timeout="timeout"
      :bottom="y"
      v-model="snackbar"
    >
      {{ snackbarText }}
      <v-btn flat class="white--text" @click.native="snackbar = false">Zamknij</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>

import {db} from '../firebase'
import moment from 'moment'
import firebase from 'firebase'

export default {
  name: 'add',
  data () {
    return {
      dialog: false,
      selectedActivity: null,
      selectedUser: null,
      loader: null,
      loading4: false,
      snackbar: false,
      y: 'bottom',
      timeout: 2000,
      snackbarText: 'Dodano aktywność',
      user: firebase.auth().currentUser
    }
  },
  computed: {
    users() {
      return ['bartek', 'paula']
    },
    activitiesOptions() {
      return this.$store.state.activitiesOptions
    },
    selectedPoints() {
      //using lodash _.filter method to find points for a selectedActivity
      let filteredObject = this._.filter(this.activitiesOptions, {'text': this.selectedActivity});
      let points = filteredObject[0].points
      return points
    },
    budgetInflow() {
      if (this.selectedPoints < 0) {
        return -this.selectedPoints / 10
      } else {
        return 0;
      }
    }
  },
  firebase: {
    activities: db.ref('activities'),
    budget: {
      source: db.ref('budget'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err)
      }
    }
  },
  methods: {
    addActivity() {
      if (this.selectedUser && this.selectedActivity) {
        this.$firebaseRefs.activities.push({username: this.selectedUser, activity: this.selectedActivity, timestamp: moment().format(), points: this.selectedPoints, budgetInflow: this.budgetInflow});
        if (this.budgetInflow > 0) {
          this.$firebaseRefs.budget.child('total').set(Number((this.budget[2]['.value'] + this.budgetInflow).toFixed(2)))
          if (this.selectedUser === 'Paula') {
            this.$firebaseRefs.budget.child('paulaTotal').set(Number((this.budget[1]['.value'] + this.budgetInflow).toFixed(2)))
          } else {
            this.$firebaseRefs.budget.child('bartekTotal').set(Number((this.budget[0]['.value'] + this.budgetInflow).toFixed(2)))
          }
        }
        this.selectedActivity = null
        this.selectedUser = null
        this.loader = 'loading4'
        setTimeout(() => {
          this.snackbar= true
          this.dialog = false
        }, 1000)
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)
      this.loader = null
    }
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user
        this.$bindAsArray('activities', db.ref('activities/' + user.uid))
      } else {
        firebase.auth().signInAnonymously().catch(console.error)
      }
    }.bind(this))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

.gymgame-add {
  &__card-title {
    font-size: 1.5rem;
    margin: 0;
    padding: 0 10px;
  }
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
