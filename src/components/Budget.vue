<template>
  <v-card>
    <v-card-title>
      <v-icon large class="green--text">attach_money</v-icon>
      <h1 class="gymgame-add__card-title">Budżet</h1>
    </v-card-title>
      <v-card-text>
        <v-layout column align-center>
          Total
          <v-progress-circular
            :size="200"
            :width="15"
            :rotate="90"
            :value="budget[2]['.value']"
            v-model="totalBudgetMax"
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
                  :rotate="90"
                  v-model="bartekBudgetMax"
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


        <v-text-field
          name="input-2"
          label="Wypłata / Zmiana budżetu"
          value="newBudget"
          class="input-group"
          v-model="newBudget"
          @keyup.enter="updateBudget(newBudget)"
        ></v-text-field>

        <div class="">
          <v-btn
            @click="updateBudget(newBudget)"
            @click.native="loader = 'loading4'"
            info
            block
            :loading="loading4"
          >
            Zaktualizuj budżet
          </v-btn>
        </div>
        <!-- {{ getPlusPoints()[1].history }} -->
        <!-- {{ getPlusPoints()[0].dailyPoints }} -->
      </v-card-text>
      <div class="chart-container" style="width: 50vh; height: 50vh">
        <line-chart :chart-data="datacollection"></line-chart>
      </div>
    </v-card>
</template>

<script>

import {db} from '../firebase'
import moment from 'moment'
import LineChart from '../charts/chart1'

export default {
  name: 'budget',
  components: {
    LineChart
  },
  data () {
    return {
      loader: null,
      show: false,
      loading4: false,
      newBudget: null,
      history: [],
      datacollection: {
        labels: this.getLabels(),
        datasets: [
          {
            label: '# of Paula',
            data: [12, 19, 3, 5, 2, 3, 25],
            backgroundColor: [
                'rgba(0, 0, 255, 0.3)'
            ],
            borderColor: [
                'green'
            ],
            borderWidth: 1
          },
          {
            label: '# of Bartek',
            data: [2,2,2,2],
            backgroundColor: [
                'rgba(0, 0, 0, 0.3)'
            ],
            borderColor: [
                'green'
            ],
            borderWidth: 1
          },
          {
            label: '# of Bartek ujemne',
            data: this.getHistory(),
            backgroundColor: [
                'rgba(0, 0, 255, 0.15)'
            ],
            borderColor: [
                'red'
            ],
            borderWidth: 1
          },
          {
            label: '# of Paula ujemne',
            data: [-3, -1, -7, -10, -2, -5, -10],
            backgroundColor: [
              'rgba(0, 0, 0, 0.15)'
            ],
            borderColor: [
                'red'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {responsive: true, maintainAspectRatio: false},
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
    getLabels() {
      let labels = []
      for (let i = 6; i >= 0; i--) {
        labels.push(moment().subtract(i, 'd').format('DD-MM-YYYY'))
      }
      return labels
    },
    getHistory() {
      let ref = db.ref('activitiesHistory')
      let history = []
      let points = [0, 0, 0, 0, 0, 0, 0]
      // let dailyPoints = [10]
      //this allows to retrieve data from Firebase as I cannot take it from Vuex and there is a problem with using data and computed because of context
      ref.on("value", function(snapshot) {
        for(let prop in snapshot.val()) {
          history.push((snapshot.val()[prop]))
        }
      }, function (error) {
         console.log("Error: " + error.code)
      });

      for(let i = 0; i < history.length; i++) {
        // a week, from 6 days ago
        for(let j = 6; j >= 0; j--) {
          if (moment(history[i].timestamp).format('DD-MM-YYYY') === moment().subtract(j, 'days').format('DD-MM-YYYY')) {
            points[6-j] += history[i].points
            console.log(moment(history[i].timestamp).format('DD-MM-YYYY'))
            console.log(moment().subtract(j, 'days').format('DD-MM-YYYY'))
          }
        }
      }
      return points
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    totalBudgetMax() {
      // Sets max budget to 40PLN
      return this.budget[2]['.value'] * 2.5
    },
    bartekBudgetMax() {
      return this.budget[0]['.value'] * 2.5
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
