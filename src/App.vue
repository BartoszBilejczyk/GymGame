<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/">add</router-link></li>
      <li><router-link to="/standings">standings</router-link></li>
      <li><router-link to="/history">history</router-link></li>
      <li><router-link to="/budget">budget</router-link></li>
      <li><router-link to="/additional-features">additional-features</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
