import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: null,
    navigation: [
      { icon: 'dashboard', text: 'Dashboard', to: '/'},
      { icon: 'poll', text: 'Activity', to: '/standings'},
      { icon: 'history', text: 'Leaderboard', to: '/history'},
      { icon: 'attach_money', text: 'Achievements', to: '/budget'},
      { icon: 'star_border', text: 'Recipes', to: '/additional-features'}
    ],
    users: [
      { index: 1, text: 'Bartek', photo: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male-64.png' },
      { index: 2, text: 'Paula', photo: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-64.png' },
    ],
    activitiesOptions: [
      { text: 'Siłownia', points: 15},
      { text: 'Ładne jedzenie cały dzień', points: 15},
      { text: 'Shake białkowy', points: 15},
      { text: 'Mierzenie składu ciała', points: 15},
      { text: 'Picie wody / dzień', points: 15},
      { text: 'Wyrobienie kalorii', points: 15},
      { text: 'Wymyślenie dobrego obiadu / posiłku', points: 15},
      { text: 'Gotowanie własne (1 obiad)', points: 15},
      { text: 'Gotowanie komuś (1 porcja)', points: 15},
      { text: 'Zmotywowanie kogoś do pójścia na siłkę', points: 15},
      { text: 'Inna aktywność (rower, trampoliny itp)', points: 15},
      { text: 'Pielęgnacja ciała', points: 12},

      { text: 'Kebab', points: -15},
      { text: 'Fast food', points: -15},
      { text: 'Pizza', points: -8},
      { text: 'Chipsy', points: -10},
      { text: 'Słodki napój (szklanka)', points: -3},
      { text: 'Snickers', points: -5},
      { text: 'Czekolada', points: -7},
      { text: 'Daim', points: -4},
      { text: 'Twix', points: -7},
      { text: '7Days', points: -7},
      { text: 'Piwo', points: -3},
      { text: 'Piwo b/a', points: -2},
      { text: 'Wódka (0.5)', points: -20},
      { text: 'Wino (0.7)', points: -5},
      { text: 'Kolorowy drink', points: -2}
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
    logUser(state, payload) {
      state.loggedUser = payload
    },
    logoutUser(state, payload) {
      state.loggedUser = payload
    }
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
    logUser({commit}, payload) {
      commit('logUser', payload);
      console.log('user logged in vuex')
    },
    logoutUser({commit}, payload) {
      commit('logUser', payload);
      console.log('user log out from vuex')
    }
    // addItem ({commit}, payload) {
    //   commit('addItem', payload)
    //   console.log('Added')
    // }
  }
})
