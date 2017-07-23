import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    users: [
      { name: 'Paula' },
      { name: 'Bartek' }
    ],
    activitiesOptions: [
      { name: 'gym' },
      { name: 'calorie count'}
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
