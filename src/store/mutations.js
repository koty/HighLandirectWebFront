export const STORAGE_KEY = 'customers-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  customer_list: [
    {customer_id: 1, name: 'にしざわ', 'postal_cd': '381-0001', 'prefecture': '長野県', 'city': '長野市', 'address1': 'あのへん', 'phone': '12-3456-7890', 'memo': 'メモ1'},
    {customer_id: 2, name: 'ひがしざわ', 'postal_cd': '381-0002', 'prefecture': '長野県', 'city': '長野市', 'address1': 'このへん', 'phone': '12-3456-7890', 'memo': 'メモ2'},
    {customer_id: 3, name: 'きたざわ', 'postal_cd': '381-0003', 'prefecture': '長野県', 'city': '長野市', 'address1': 'そのへん', 'phone': '12-3456-7890', 'memo': 'メモ3'},
    {customer_id: 4, name: 'みなみさわ', 'postal_cd': '381-0004', 'prefecture': '長野県', 'city': '長野市', 'address1': 'あっちらへん', 'phone': '12-3456-7890', 'memo': 'メモ4'}
  ],
  order_list: [
    {order_id: 1, order_no: 'o1', date: '2017-09-15', send_customer_id: 1, details: [{receive_customer_id: 2, product_id: 1, selected: false}]},
    {order_id: 2, order_no: 'o2', date: '2017-10-15', send_customer_id: 3, details: [{receive_customer_id: 2, product_id: 1, selected: false}, {receive_customer_id: 1, product_id: 1, selected: true}]}
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
  /**
   * 氏名変更イベント
   * @param state
   * @param value
   */
  edit_customer_name (state, { value }) {
    state.selected_row.name = value
    const filteredRows = state.customer_list.filter(x => x.customer_id === state.selected_row.customer_id)
    const row = filteredRows[0]
    row.name = value
  },
  /**
   * 郵便番号変更イベント
   * @param state
   * @param addresses
   */
  edit_customer_address (state, { data, zipcode }) {
    const filteredRows = state.customer_list.filter(x => x.customer_id === state.selected_row.customer_id)
    const row = filteredRows[0]
    row.postal_cd = zipcode.slice(0, 3) + '-' + zipcode.slice(3, 7)
    row.prefecture = data.pref
    row.city = data.city
    row.address1 = data.town
    state.selected_row = row  // こうしないと明細がrefreshしない...
  },
  delete_selected_order (state, {order_no}) {
    const order = state.order_list.filter(x => x.order_no === order_no)[0]
    for (let i = order.details.length - 1; i >= 0; i--) {
      if (!order.details[i].selected) {
        continue
      }
      order.details.splice(i, 1)
    }
  }
}
