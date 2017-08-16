export const STORAGE_KEY = 'customers-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  customer_list: [
    {customer_id: 1, name: 'にしざわ', 'postal_cd': '381-0001', 'address': 'あのへん', 'phone': '12-3456-7890', 'memo': 'メモ1'},
    {customer_id: 2, name: 'ひがしざわ', 'postal_cd': '381-0002', 'address': 'このへん', 'phone': '12-3456-7890', 'memo': 'メモ2'},
    {customer_id: 3, name: 'きたざわ', 'postal_cd': '381-0003', 'address': 'そのへん', 'phone': '12-3456-7890', 'memo': 'メモ3'},
    {customer_id: 4, name: 'みなみさわ', 'postal_cd': '381-0004', 'address': 'あっちらへん', 'phone': '12-3456-7890', 'memo': 'メモ4'}
  ],
  selected_row: {customer_id: 0, name: '', '': '', 'phone': '', 'memo': ''}
}

export const mutations = {
  add_customer (state, { text }) {
    state.customer_list.push({
      text,
      done: false
    })
  },

  delete_customer (state, { todo }) {
    state.customer_list.splice(state.customer_list.indexOf(todo), 1)
  },

  edit_customer (state, { value }) {
    state.selected_row.name = value
    let filteredRows = state.customer_list.filter(x => x.customer_id === state.selected_row.customer_id)
    let row = filteredRows[0]
    row.name = value
  }
}
