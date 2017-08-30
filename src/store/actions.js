import axios from 'axios'

export const actions = {
  /**
   * 郵便番号変更イベント
   */
  customer_postal_cd_changed (context, { value }) {
    value = value.replace(/-/, '')
    if (value.length < 7) {
      return
    }
    // 郵便番号APIをたたく。
    return axios.get(location.protocol + '//api.zipaddress.net/?zipcode=' + value)
      .then(function (response) {
        context.commit('edit_customer_address', {data: response.data.data, zipcode: value})
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
