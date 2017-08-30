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
        <md-input @change="name_changed" v-model="selected_row.name"></md-input>
      </md-input-container>
      <md-input-container>
        <label>〒</label>
        <md-input @change="postal_cd_changed" v-model="selected_row.postal_cd" id="postal_cd"></md-input>
      </md-input-container>
      <md-input-container>
        <label>都道府県</label>
        <md-input v-model="selected_row.prefecture" id="prefecture"></md-input>
      </md-input-container>
      <md-input-container>
        <label>市区町村</label>
        <md-input v-model="selected_row.city" id="city"></md-input>
      </md-input-container>
      <md-input-container>
        <label>住所</label>
        <md-input ref='address1' v-model="selected_row.address1" id="address1"></md-input>
      </md-input-container>
      <md-input-container>
        <label>電話番号</label>
        <md-input v-model="selected_row.phone" id="phone"></md-input>
      </md-input-container>
      <md-input-container>
        <label>備考</label>
        <md-textarea rows="3" v-model="selected_row.memo"></md-textarea>
      </md-input-container>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    methods: {
      name_changed (value) {
        this.$store.commit('edit_customer_name', {value})
      },
      postal_cd_changed (value) {
        this.$store.dispatch('customer_postal_cd_changed', {value})
          .then(result => { if (!result) { return } this.$refs.address1.$el.focus() })
      }
    },
    computed: {
      ...mapGetters({
        selected_row: 'selected_row'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
