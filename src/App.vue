<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">HighLandirect</h1>
      <md-button class="md-raised">印刷！</md-button>
      <span>ソース：<a target="_blank" href="https://github.com/koty/HighLandirectWebFront">https://github.com/koty/HighLandirectWebFront</a></span>
    </md-toolbar>
    <md-button><router-link to="/">top</router-link></md-button>
    <md-button><router-link to="/customers">顧客一覧</router-link></md-button>
    <md-button><router-link to="/orders">注文一覧</router-link></md-button>
    <md-button><router-link to="/orders/o2">注文一覧/o2</router-link></md-button>
    <!--img src="./assets/logo.png"-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .md-raised {
    margin-left: 30px;
  }
  body {
    margin: 1em;
  }
</style>
