export const STORAGE_KEY = 'customers-vuejs'
import axios from 'axios'

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
  postal_cd_changed (state, { value }) {
    value = value.replace(/-/, '')
    if (value.length < 7) {
      return
    }
    const filteredRows = state.customer_list.filter(x => x.customer_id === state.selected_row.customer_id)
    const row = filteredRows[0]
    if (row.postal_cd === value) {
      return
    }
    row.postal_cd = value.slice(0, 3) + '-' + value.slice(3, 7)
    // 郵便番号APIをたたく。
    axios.get(location.protocol + '//api.zipaddress.net/?zipcode=' + value)
      .then(function (response) {
        let data = response.data.data
        row.prefecture = data.pref
        row.city = data.city
        row.address1 = data.town
        state.selected_row = row  // こうしないと明細がrefreshしない...
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
