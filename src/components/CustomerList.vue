<template>
  <div class="customer-list">
    <h2>顧客一覧</h2>
    <v-client-table :data="tableData" :columns="columns" :options="options" @row-click="row_click"></v-client-table>
    <customer-detail :selected_row="selected_row"></customer-detail>
  </div>
</template>

<script>
  import CustomerDetail from '@/components/CustomerDetail'
  import Vuex from 'vuex'
  import { customer_list_ref } from '../store/firebase'
  const customer_list = []
  export default {
    firebase: {
      customer_list: customer_list_ref
    },
    created: function () {
      this.$on('selected_row_value_changed', function (row) {
        let rows = this.tableData.filter(x => x === row)
        console.log(rows.length)
        if (rows.length === 0) {
          return
        }
        for (const key in ['name', 'postal_cd', 'prefecture', 'city', 'address1', 'phone', 'memo']) {
          rows[0][key] = row[key]
        }
      })
      customer_list_ref.on('value', function (snapshot) {
        const val = snapshot.val()
        for (let key in val) {
          customer_list.push(val[key])
        }
      })
    },
    computed: {
      ...Vuex.mapState(['customer_list'])
    },
    data () {
      return {
        columns: ['customer_id', 'name', 'postal_cd', 'prefecture', 'city', 'address1', 'phone', 'memo'],
        tableData: customer_list,
        options: {},
        selected_row: this.$store.state.selected_row
      }
    },
    methods: {
      row_click: function (source) {
        this.$store.state.selected_row = source.row
      }
    },
    components: {'customer-detail': CustomerDetail}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
