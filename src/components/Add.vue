<template>
  <v-card>
    <v-toolbar class="green" dense>
      <v-toolbar-title class="white--text" primary-title>
        Add activity
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
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
    </v-container>


  </v-card>

    <!-- <div v-for="user of users">
      {{ user.name }}

      <input
        :value="user.username"
        @keyup.enter="updateUsername(user, $event.target.value)">
      <button type="button" name="button" @click="removeUser(user)">Remove User</button>
    </div> -->
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
        this.$firebaseRefs.activitiesHistory.push({username: this.selectedUser, activity: this.selectedActivity, timestamp: Date()});
        this.selectedActivity = ''
        this.selectedUser = ''
      // }
    },
    updateUsername(user, newName) {
      this.$firebaseRefs.activitiesHistory.child(user['.key']).child('name').set(newName);
    },
    removeUser(user) {
      this.$firebaseRefs.activitiesHistory.child(user['.key']).remove()
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
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
