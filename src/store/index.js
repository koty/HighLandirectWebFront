import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import { actions } from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  plugins,
  actions,
  getters: {
    customer_list: function () {
      return state.customer_list
    },
    selected_row: function () {
      return state.selected_row
    }
  }
})
