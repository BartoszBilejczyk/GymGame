<template>
  <v-card>
    <v-card-title>
      <v-icon fa large class="green--text">money</v-icon>
      <h1 class="gymgame-add__card-title">Budżet</h1>
    </v-card-title>
    <v-card-text>
      {{ activitiesHistory }}
      <br><br>
      <div class="" v-for="budgetItem in budget">
        Current budget: {{ budgetItem.budget }}
      </div>

      <br><br><br>

      Wypłata / Zmiana budżetu

      <v-text-field
        name="input-2"
        label="Label Text"
        value="Input text"
        class="input-group--focused"
        v-model="newBudget"
      ></v-text-field>

      <div class="" v-for="budgetItem in budget">
        <v-btn @click="updateBudget(budgetItem, newBudget)">
          asdsad
        </v-btn>
        {{ budgetItem.budget }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'budget',
  data () {
    return {
      newBudget: ''
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
    updateBudget: function (budgetItem, newBudget) {
      this.$firebaseRefs.budget.child(budgetItem['.key']).child('budget').set(newBudget)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
