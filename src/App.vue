<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />

    <!-- 底部导航栏 -->
    <section class="home-bar">
      <div class="bar-item">
        <img class="icon" src="./assets/logo.png" alt="首页图标" />
        <div class="bar-text">首页</div>
      </div>
      <div class="bar-item">
        <img class="icon" src="./assets/logo.png" alt="分类图标" />
        <div class="bar-text">分类</div>
      </div>
      <div class="bar-item">
        <img class="icon" src="./assets/logo.png" alt="购物车图标" />
        <div class="bar-text">购物车</div>
      </div>
      <div class="bar-item">
        <img class="icon" src="./assets/logo.png" alt="我的图标" />
        <div class="bar-text">我的</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
