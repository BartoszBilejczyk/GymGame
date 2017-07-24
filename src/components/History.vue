<template>
  <div class="">
    <v-card v-for="user in users" :key="user.text">
      <v-card-title>
        <v-list-tile-avatar>
          <img :src="user.photo" alt="">
        </v-list-tile-avatar>
        {{ user.text }}
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Szukaj"
          single-line
          hide-deatils
          v-model="search">
        </v-text-field>
      </v-card-title>

      <v-data-table
        :headers="historyHeaders"
        :items="userActivitiesHistory(user.text)"
        :search="search">

        <template slot="items" scope="props" >
          <td>{{ props.item.activity }}</td>
          <td class="text-xs-right">{{ props.item.points }}</td>
          <td class="text-xs-right">{{ props.item.timestamp | formatDate }}</td>
          <td class="text-xs-center">
            <v-icon @click="removeActivity(props.item)">delete</v-icon>
          </td>
        </template>

      </v-data-table>
    </v-card>
  </div>
</template>

<!-- <div v-for="activity in activitiesHistory">
  {{activity.username}}
  {{activity.activity}}
  {{activity.timestamp}}
  <button type="button" name="button" @click="removeActivity(activity)">Usuń</button>
</div> -->

<script>

import {db} from '../firebase'

export default {
  name: 'history',
  data () {
    return {
      search: '',
      pagination: {},
      activitiesHistory: [],
    }
  },
  firebase: {
    activitiesHistory: {
      source: db.ref('activitiesHistory'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err);
      }
    },
    budget: {
      source: db.ref('budget'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err);
      }
    }
  },
  methods: {
    removeActivity(activity) {
      this.$firebaseRefs.activitiesHistory.child(activity['.key']).remove()
      console.log(this.$firebaseRefs.activitiesHistory.child(activity['.key']))
    },
    userActivitiesHistory(username) {
      let filtered = this.activitiesHistory.filter(function(activity) {
        return activity.username == username
      })
      return filtered
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    historyHeaders() {
      return this.$store.state.historyHeaders
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>

<!-- <div v-for="user of users">
  {{ user.name }}

  <input
    :value="user.username"
    @keyup.enter="updateUsername(user, $event.target.value)">
</div> -->

<!-- updateUsername(user, newName) {
  this.$firebaseRefs.activitiesHistory.child(user['.key']).child('name').set(newName);
}, -->
