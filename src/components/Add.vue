<template>
  <div class="">
    <h1>Add Activity</h1>
    <select v-model="selectedUser">
      <option v-for="user in users" :value="user.name">{{ user.name }}</option>
    </select>
    <select v-model="selectedActivity">
      <option v-for="activity in activitiesOptions" :value="activity.name">{{ activity.name }}</option>
    </select>
    {{ selectedActivity }}
    <button type="button" name="button" @click="addActivity()">Add Activity</button>
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
// import {mapState} from 'vuex'

export default {
  name: 'add',
  data () {
    return {
      selectedActivity: '',
      selectedUser: ''
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
      if (this.selectedUser && this.selectedActivity) {
        this.$firebaseRefs.activitiesHistory.push({username: this.selectedUser, activity: this.selectedActivity, timestamp: Date()});
        this.selectedActivity = ''
        this.selectedUser = ''
      }
    },
    updateUsername(user, newName) {
      this.$firebaseRefs.activitiesHistory.child(user['.key']).child('name').set(newName);
    },
    removeUser(user) {
      this.$firebaseRefs.activitiesHistory.child(user['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
