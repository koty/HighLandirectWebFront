const state = {customer_list: []}
const getters = {
  customer_id: state => { return state.customer_id },
  postal_cd: state => { return state.postal_cd },
  prefecture: state => { return state.prefecture },
  city: state => { return state.city },
  address1: state => { return state.address1 },
  phone: state => { return state.phone },
  memo: state => { return state.memo }
}

const mutations = {
  set_customer_id (state, value) { state.customer_id = value },
  set_name (state, value) { state.name = value },
  set_postal_cd (state, value) { state.postal_cd = value },
  set_prefecture (state, value) { state.prefecture = value },
  set_city (state, value) { state.postal_cd = value },
  set_address1 (state, value) { state.address1 = value },
  set_phone (state, value) { state.phone = value },
  set_memo (state, value) { state.memo = value },
  edit_customer_address (state, { row, data, zipcode }) {
    row.postal_cd = zipcode.slice(0, 3) + '-' + zipcode.slice(3, 7)
    row.prefecture = data.pref
    row.city = data.city
    row.address1 = data.town
    state.selected_row = row  // こうしないと明細がrefreshしない...
  }
}

const actions = {
  set_customer_id (context, value) { context.commit('set_customer_id', value) },
  set_name (context, value) { context.commit('set_name', value) },
  set_postal_cd (context, value) { context.commit('set_postal_cd', value) },
  set_prefecture (context, value) { context.commit('set_prefecture', value) },
  set_city (context, value) { context.commit('set_postal_cd', value) },
  set_address1 (context, value) { context.commit('set_address1', value) },
  set_phone (context, value) { context.commit('set_phone', value) },
  set_memo (context, value) { context.commit('set_memo', value) }
}

export default {
  state,
  getters,
  mutations,
  actions
}
