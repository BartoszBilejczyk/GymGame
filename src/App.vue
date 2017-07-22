<template>
  <div id="app">
    <ul class="gymgame-nav">
      <li class="gymgame-nav__item"><router-link to="/">add</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/standings">standings</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/history">history</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/budget">budget</router-link></li>
      <li class="gymgame-nav__item"><router-link to="/additional-features">additional-features</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang='scss'>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .gymgame-nav {
      list-style: none;
    &__item {
      display: inline;
      padding: 5px;

      a {
        text-decoration: none;
        color: inherit;
        padding: 20px;
        background: aliceblue;
      }
    }
  }
</style>
