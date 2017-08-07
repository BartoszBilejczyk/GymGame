<template lang="html">
  <div class="gym-activity-history">
    <ul class="gym-activity-history-list">
      <activity-item v-for="(activity, index) in activities"
                     :key="index"
                     :activeUser="activeUser"
                     :activities="activities"
                     :index="index"
      />
    </ul>
    <more-button :path="'activity'"/>
  </div>
</template>

<script>
import {db, activitiesRef} from '../../firebase'
import firebase from 'firebase'
import moment from 'moment'
import ActivityItem from './ActivityItem'
import MoreButton from './Helpers/MoreButton'

export default {
  props: ['activeUser'],
  components: {
    ActivityItem,
    MoreButton
  },
  data() {
    return {
      user: ''
    }
  },
  computed: {
    recent() {
      return 'activities'
    },
    currentUID() {
      return this.activeUser.uid
    }
  },
  firebase: {
    activities: db.ref('activities')
  },
  beforeCreate: function() {

    // Setup Firebase onAuthStateChanged handler
    //
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user
        // https://github.com/vuejs/vuefire/blob/master/src/vuefire.js#L169
        this.$bindAsArray('activities', db.ref('activities/' + user.uid))
      } else {
        // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInAnonymously
        firebase.auth().signInAnonymously().catch(console.error)
      }
    }.bind(this))
  },
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.gym-activity-history {
  width: 100%;

  &-list {
    padding: 10px 30px 10px 36px;
    margin: 0;
    list-style: none;
    position: relative;

    &::before {
      content: ' ';
      height: 100%;
      width: 1px;
      border-left: 1px dashed pal(white, light-dark);
      position: absolute;
      top: 0;
      left: 2.5em;
      z-index: 0;
    }
  }
}
</style>
