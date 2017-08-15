<template>
  <div class="customer-list">
    <h2>顧客一覧</h2>
    <v-client-table :data="tableData" :columns="columns" :options="options" @row-click="row_click"></v-client-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: ['id', 'name', 'postal_cd', 'address', 'phone', 'memo'],
        tableData: [
          {id: 1, name: 'にしざわ', 'postal_cd': '381-0001', 'phone': '12-3456-7890', 'memo': 'メモ1'},
          {id: 2, name: 'ひがしざわ', 'postal_cd': '381-0002', 'phone': '12-3456-7890', 'memo': 'メモ2'},
          {id: 3, name: 'きたざわ', 'postal_cd': '381-0003', 'phone': '12-3456-7890', 'memo': 'メモ3'},
          {id: 4, name: 'みなみさわ', 'postal_cd': '381-0004', 'phone': '12-3456-7890', 'memo': 'メモ4'}
        ],
        options: {}
      }
    },
    selected_row: null,
    methods: {
      row_click: function (source) {
        alert(source.row.name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
