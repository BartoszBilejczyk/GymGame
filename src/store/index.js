import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    users: [
      { text: 'Paula', photo: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-64.png' },
      { text: 'Bartek', photo: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male-64.png' }
    ],
    activitiesOptions: [
      { text: 'gym', points: '2'},
      { text: 'calorie count', points: '2'}
    ],
    historyHeaders: [
      {
        text: 'Aktywność',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Punkty',
        value: 'points'
      },
      { text: 'Data',
        value: 'date'
      },
    ]
  },
  mutations: {
    // addItem (state, payload) {
    //   let found = false
    //
    //   if (state.order.length) {
    //     for (let i = 0; i < state.order.length; i++) {
    //       if (state.order[i].name === payload.name) {
    //         found = true
    //         state.order[i].quantity++
    //         break
    //       }
    //     }
    //     if (!found) {
    //       state.order.push(payload)
    //     }
    //   } else {
    //     state.order.push(payload)
    //   }
    //   state.subtotal += payload.price
    //   state.totalTime += payload.prepTime
    //   state.totalCost = state.subtotal + state.shipping
    // }
  },
  actions: {
    // addItem ({commit}, payload) {
    //   commit('addItem', payload)
    //   console.log('Added')
    // }
  }
})
