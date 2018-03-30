<template>
  <div id="app">
    APP.vue
    <img src="./assets/logo.png">
    <!-- 切换效果，需要加其他东西，否则不明显 -->
    <!-- <transition name="fade"> -->
      <router-view >
      </router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
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
