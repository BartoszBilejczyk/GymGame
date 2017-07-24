<template>
  <v-card>
    <v-card-title>
      <v-icon fa large class="green--text">money</v-icon>
      <h1 class="gymgame-add__card-title">Budżet</h1>
    </v-card-title>
      <v-card-text>
        <v-layout column align-center>
          Total
          <v-progress-circular
            :size="200"
            :width="15"
            :rotate="360"
            :value="fetchBudgetData().total"
            class="green--text"
          >
            {{ fetchBudgetData().total }}
          </v-progress-circular>
            <div v-for="(user, index) in users">
              <v-layout column align-center>
              {{ user.text }}
              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="360"
                :value.literal="fetchBudgetData(user.text).inflow[index].value"
                class="green--text"
              >
                {{ fetchBudgetData(user.text).inflow[index].value }}
              </v-progress-circular>
            </v-layout>
          </div>
        </v-layout>

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
  </v-card>
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'budget',
  data () {
    return {
      newBudget: '',
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
      source: db.ref('budget/-KpoY6GPb3z2A0rXYclq'),
      // handle errors in console
      cancelCallback(err) {
        console.error(err)
      }
    }
  },
  methods: {
    updateBudget(budgetItem, newBudget) {
      if (isNaN(this.newBudget) == false) {
        this.$firebaseRefs.budget.child(budgetItem['.key']).child('budget').set(Number(newBudget))
      } else {
        alert('Please provide a number')
      }
    },
    fetchBudgetData(username) {
      let total = null
      let inflow = [
        { value: 0 },
        { value: 0 }
      ]

      total = this.budget[0].budget

      // create a new array only with activities regarding a specific person
      let userFilteredBudgetInflow = this.activitiesHistory.filter(function(user) {
        return user.username === username
      })
      // count the money inflow from each person
      userFilteredBudgetInflow.forEach((el, index) => {
        if (userFilteredBudgetInflow[index].username === 'Paula') {
          inflow[0].value += userFilteredBudgetInflow[index].budgetInflow
        } else {
          inflow[1].value += userFilteredBudgetInflow[index].budgetInflow
        }
      })
      inflow[0].value = parseFloat(inflow[0].value)
      inflow[1].value = parseFloat(inflow[1].value)

      return {
        total: total,
        inflow: inflow
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
