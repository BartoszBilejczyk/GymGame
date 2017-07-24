<template>
  <v-card>
    <v-card-title>
      <v-icon fa large class="green--text">plus-circle</v-icon>
      <h1 class="gymgame-add__card-title">Add activity</h1>
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
      <v-btn
        @click="addActivity()"
        @click.native="loader = 'loading4'"
        success
        :loading="loading4"
        class="text-xs-center">
        Dodaj aktywność
        <span slot="loader" class="custom-loader">
          <v-icon dark>cached</v-icon>
        </span>
      </v-btn>
    </v-card-text>
  </v-card>


  </div>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'add',
  data () {
    return {
      selectedActivity: null,
      selectedUser: null,
      loader: null,
      loading4: false
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
    }
  },
  firebase: {
    activitiesHistory: {
      source: db.ref('activitiesHistory'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err);
      }
    }
  },
  methods: {
    addActivity() {
      // if (this.selectedUser && this.selectedActivity) {
        this.$firebaseRefs.activitiesHistory.push({username: this.selectedUser, activity: this.selectedActivity, timestamp: Date(), points: this.selectedPoints});
        this.selectedActivity = null
        this.selectedUser = null
        this.selectedPoints = null
      // }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    },
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
