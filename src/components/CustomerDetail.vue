<template>
  <div class="customer-list">
    <h2>顧客詳細</h2>
    <form>
      <md-input-container>
        <label>ID</label>
        <md-input class="s6" readonly v-model="selected_row.customer_id"></md-input>
      </md-input-container>
      <md-input-container>
        <label>氏名</label>
        <md-input v-model.lazy="selected_row.name"></md-input>
      </md-input-container>
      <md-input-container>
        <label>〒</label>
        <md-input @change="postal_cd_changed" v-model.lazy="selected_row.postal_cd" id="postal_cd"></md-input>
      </md-input-container>
      <md-input-container>
        <label>都道府県</label>
        <md-input v-model.lazy="selected_row.prefecture" id="prefecture"></md-input>
      </md-input-container>
      <md-input-container>
        <label>市区町村</label>
        <md-input v-model.lazy="selected_row.city" id="city"></md-input>
      </md-input-container>
      <md-input-container>
        <label>住所</label>
        <md-input ref='address1' v-model.lazy="selected_row.address1" id="address1"></md-input>
      </md-input-container>
      <md-input-container>
        <label>電話番号</label>
        <md-input v-model.lazy="selected_row.phone" id="phone"></md-input>
      </md-input-container>
      <md-input-container>
        <label>備考</label>
        <md-textarea rows="3" v-model.lazy="selected_row.memo"></md-textarea>
      </md-input-container>

      <md-button class="md-raised" @click="add">登録</md-button>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { customer_list_ref } from '../store/firebase'
  export default {
    firebase: {
      customer_list: customer_list_ref
    },
    data () {
      return {
        customer_id: null,
        name: '',
        postal_cd: '',
        prefecture: '',
        city: '',
        address1: '',
        phone: '',
        memo: '',
        feedback: ''
      }
    },
    methods: {
      postal_cd_changed (value) {
        this.$store.dispatch('customer_postal_cd_changed', {value})
          .then(result => { if (!result) { return } this.$refs.address1.$el.focus() })
      },
      add () {
        const data = {
          customer_id: this.$data.customer_id,
          name: this.$data.name,
          postal_cd: this.$data.postal_cd,
          prefecture: this.$data.prefecture,
          city: this.$data.city,
          address1: this.$data.address1,
          phone: this.$data.phone,
          memo: this.$data.memo
        }
        customer_list_ref.push(data)
        this.feedback = this.name + ' has been registered!!'
        // if (this.navigateToListAfterEntry) {
        //   this.$router.push('/list')
        // }
      }
    },
    computed: {
      ...mapGetters([
        'customer_list',
        'selected_row'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
