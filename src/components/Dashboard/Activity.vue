<template lang="html">
  <div class="gym-activity-history">
    <component-name :componentName="this.$options.name" />
    <more-button :path="'activity'"/>

    <ul class="gym-activity-history-list">
      <activity-item v-for="(activity, index) in activities"
                     :key="index"
                     :activeUser="activeUser"
                     :activities="activities"
                     :index="index"
      />
    </ul>
  </div>
</template>

<script>
import {db} from '../../firebase'
import firebase from 'firebase'
import moment from 'moment'
import ActivityItem from './ActivityItem'
import MoreButton from './Helpers/MoreButton'
import ComponentName from './Helpers/ComponentName'

export default {
  name: 'Activity',
  props: ['activeUser'],
  components: {
    ActivityItem,
    MoreButton,
    ComponentName
  },
  firebase: {
    activities: db.ref('activities')
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
