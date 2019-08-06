<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />

    <!-- 底部导航栏 -->
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home-bar {
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  > .bar-item {
    flex-grow: 1;
  }

  .bar-text {
  }
}
</style>
