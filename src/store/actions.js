import axios from 'axios'
import { db } from './firebase'

export const actions = {
  /**
   * 郵便番号変更イベント
   */
  customer_postal_cd_changed (context, { value }) {
    value = value.replace(/-/, '')
    if (value.length < 7) {
      return new Promise((resolve, reject) => {
        resolve(false)
      })
    }
    // 郵便番号APIをたたく。
    return axios.get(location.protocol + '//api.zipaddress.net/?zipcode=' + value)
      .then(function (response) {
        context.commit('edit_customer_address', {
          row: context.state.selected_row,
          data: response.data.data,
          zipcode: value
        })
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  selected_customer_changed (context, { row }) {
    return db.ref('customer_list/' + row.key)
      .once('value')
      .then(function (snapshot) {
        const val = snapshot.val()
        return new Promise((resolve, reject) => {
          resolve(val)
        })
      })
  }
}
