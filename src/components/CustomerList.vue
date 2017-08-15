<template>
  <div class="customer-list">
    <h2>顧客一覧</h2>
    <v-client-table :data="tableData" :columns="columns" :options="options" @row-click="row_click"></v-client-table>
    <customer-detail :selected_row="selected_row"></customer-detail>
  </div>
</template>

<script>
  import CustomerDetail from '@/components/CustomerDetail'

  export default {
    data () {
      return {
        columns: ['customer_id', 'name', 'postal_cd', 'address', 'phone', 'memo'],
        tableData: [
          {customer_id: 1, name: 'にしざわ', 'postal_cd': '381-0001', 'address': 'あのへん', 'phone': '12-3456-7890', 'memo': 'メモ1'},
          {customer_id: 2, name: 'ひがしざわ', 'postal_cd': '381-0002', 'address': 'このへん', 'phone': '12-3456-7890', 'memo': 'メモ2'},
          {customer_id: 3, name: 'きたざわ', 'postal_cd': '381-0003', 'address': 'そのへん', 'phone': '12-3456-7890', 'memo': 'メモ3'},
          {customer_id: 4, name: 'みなみさわ', 'postal_cd': '381-0004', 'address': 'あっちらへん', 'phone': '12-3456-7890', 'memo': 'メモ4'}
        ],
        options: {},
        selected_row: {customer_id: 0, name: '', '': '', 'phone': '', 'memo': ''}
      }
    },
    methods: {
      row_click: function (source) {
        this.selected_row = source.row
      }
    },
    components: {'customer-detail': CustomerDetail}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
