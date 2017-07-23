<template>
  <div class="">
    <h1>History</h1>
    <div v-for="activity in activitiesHistory">
      {{activity.username}}
      {{activity.activity}}
      {{activity.timestamp}}
    </div>
  </div>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'history',
  data () {
    return {
      activitiesHistory
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
