<template>
  <v-card>
    <v-card-title>
      <v-icon large class="green--text">add</v-icon>
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
    <v-snackbar
      :timeout="timeout"
      :bottom="y === 'bottom'"
      v-model="snackbar"
    >
      {{ snackbarText }}
      <v-btn flat class="white--text" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
  </div>
</template>

<script>

import {db} from '../firebase'
import moment from 'moment'

export default {
  name: 'add',
  data () {
    return {
      selectedActivity: null,
      selectedUser: null,
      loader: null,
      loading4: false,
      snackbar: false,
      y: 'bottom',
      timeout: 1500,
      snackbarText: 'Dodano aktywność'
    }
  },
  computed: {
    users() {
      return this.$store.state.users
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
    activitiesHistory: {
      source: db.ref('activitiesHistory'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err)
      }
    },
    budget: {
      source: db.ref('budget'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err)
      }
    }
  },
  methods: {
    addActivity(budgetItem) {
      if (this.selectedUser && this.selectedActivity) {
        this.$firebaseRefs.activitiesHistory.push({username: this.selectedUser, activity: this.selectedActivity, timestamp: moment().format(), points: this.selectedPoints, budgetInflow: this.budgetInflow});
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
        setTimeout(() => {this.snackbar= true}, 1000)
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    },
  }
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
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
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
