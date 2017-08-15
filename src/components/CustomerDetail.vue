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
        <md-input v-model="selected_row.name"></md-input>
      </md-input-container>
      <md-input-container>
        <label>〒</label>
        <md-input v-model="selected_row.postal_cd" id="postal_cd"></md-input>
      </md-input-container>
      <md-input-container>
        <label>住所</label>
        <md-input v-model="selected_row.address" id="address"></md-input>
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
  export default {
    methods: {
    },
    props: ['selected_row']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
