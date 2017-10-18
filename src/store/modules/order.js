const state = {order_list: []}
const getters = {
  order_id: state => { return state.order_id },
  order_no: state => { return state.order_no },
  date: state => { return state.date },
  send_customer_id: state => { return state.send_customer_id },
  details: state => { return state.details }
}

const mutations = {
  set_order_id (state, value) { state.order_id = value },
  set_order_no (state, value) { state.order_no = value },
  set_date (state, value) { state.date = value },
  set_send_customer_id (state, value) { state.send_customer_id = value },
  set_details (state, value) { state.details = value }
}

const actions = {
  set_order_id (context, value) { context.commit('set_order_id', value) },
  set_order_no (context, value) { context.commit('set_order_no', value) },
  set_date (context, value) { context.commit('set_date', value) },
  set_send_customer_id (context, value) { context.commit('set_send_customer_id', value) },
  set_details (context, value) { context.commit('set_details', value) }
}

export default {
  state,
  getters,
  mutations,
  actions
}
