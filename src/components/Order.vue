<template>
  <div>
    <h2>注文入力</h2>
    <div>
      <span>注文番号</span><span>{{ order_no }}</span>
      <span>送り主顧客番号</span><span>{{ send_customer_id }}</span>
    </div>
    <md-button class="md-raised" v-on:click="">注文追加</md-button>
    <md-button class="md-raised" v-on:click="delete_order">選択した注文を消す</md-button>
    <li v-for="detail in details">
      <input type="checkbox" v-model="detail.selected"/>{{ detail.product_id }}:{{ detail.receive_customer_id }}
    </li>
  </div>
</template>

<script>
  export default {
    created: function () {
    },
    data () {
      const order = this.$store.state.order_list.filter(x => x.order_no === this.$route.params.order_no)[0]
      return {
        order_no: this.$route.params.order_no,
        details: order.details,
        send_customer_id: order.send_customer_id
      }
    },
    methods: {
      delete_order: function () {
        this.$store.commit('delete_selected_order', {order_no: this.$route.params.order_no})
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
