<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">HighLandirect</h1>
      <md-button class="md-raised">ボタン</md-button>
    </md-toolbar>
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
