import axios from 'axios'

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
        context.commit('edit_customer_address', {data: response.data.data, zipcode: value})
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

/*
import { firebaseAction } from 'vuexfire'

const set_customer_list_ref = firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, { ref }) => {
  // this will unbind any previously bound ref to 'todos'
  bindFirebaseRef('customer_list_ref', ref)
  // you can unbind it easily too
  unbindFirebaseRef('customer_list_ref')
})

const set_order_list_ref = firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, { ref }) => {
  // this will unbind any previously bound ref to 'todos'
  bindFirebaseRef('order_list_ref', ref)
  // you can unbind it easily too
  unbindFirebaseRef('order_list_ref')
})
*/
