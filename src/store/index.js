import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
// import plugins from './plugins'
import customer from './modules/customer'
import order from './modules/order'

Vue.use(Vuex)

const getters = {
  customer_list: state => { return state.customer_list },
  selected_row: state => { return state.selected_row }
}

export default new Vuex.Store({
  actions,
  modules: {customer, order},
  getters
})
