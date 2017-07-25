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
            :rotate="-90"
            :value="budget[2]['.value']"
            v-model="budgetMax"
            class="blue--text"
          >
            {{ budget[2]['.value'] }}
          </v-progress-circular>
          <v-layout row justify-space-between>
            <div v-for="(user, index) in users">
              <v-layout column align-center>
              {{ user.text }}
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="-90"
                  v-model="budgetMax"
                  :value="budget[index]['.value']"
                  class="blue--text"
                >
                  {{ budget[index]['.value'] }}
                </v-progress-circular>
              </v-layout>
            </div>
          </v-layout>
        </v-layout>

        <br><br><br>

        Wypłata / Zmiana budżetu

        <v-text-field
          name="input-2"
          label="Label Text"
          value="newBudget"
          class="input-group--focused"
          v-model="newBudget"
        ></v-text-field>

        <div class="">
          <v-btn @click="updateBudget(newBudget)">
            Zaktualizuj budżet
          </v-btn>
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
      newBudget: null,
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
    updateBudget(newBudget) {
      if (isNaN(this.newBudget) == false) {
        this.$firebaseRefs.budget.child('total').set(Number(newBudget))
      } else {
        alert('Please provide a number')
      }
    },
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    budgetMax() {
      // Sets max budget to 40PLN
      return this.budget[2]['.value'] * 2.5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
