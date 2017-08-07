<template lang="html">
  <v-container>
    <badge v-for="badge in badges" :badge="badge" :key="badge.info"></badge>
    <more-button :path="'achievements'"/>
    <v-btn @click="addBadge()">Add badge</v-btn>
  </v-container>
</template>

<script>
import {db} from '../../firebase'
import firebase from 'firebase'
import Badge from './Badge'
import MoreButton from './Helpers/MoreButton'

export default {
  props: ['activeUser'],
  components: {
    Badge,
    MoreButton
  },
  computed: {
    badges() {
      return this.$store.state.badges
    }
  },
  methods: {
    addBadge() {
      this.$firebaseRefs.achievements.push({ name: 'Super zbieracz', url: 'obrazek' });
    }
  },
  firebase: {
    achievements: db.ref('achievements')
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user
        this.$bindAsArray('achievements', db.ref('achievements/' + user.uid))
      } else {
        firebase.auth().signInAnonymously().catch(console.error)
      }
    }.bind(this))
  }
}
</script>

<style lang="scss">

</style>
