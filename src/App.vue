<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />

    <!-- 底部导航栏 -->
    <section class="home-bar">
      <router-link
        class="bar-item"
        v-for="(tab_item) in tabBarData"
        :key="tab_item.text"
        :to="tab_item.path"
        active-class="selected"
      >
        <van-icon class="t-icon-large" :name="tab_item.icon" />
        <div class="bar-text">{{tab_item.text}}</div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarData: [
        { path: "/home", icon: "wap-home", text: "首页" },
        { path: "/classify", icon: "apps-o", text: "分类" },
        { path: "/cart", icon: "shopping-cart-o", text: "购物车" },
        { path: "/user", icon: "contact", text: "我的" }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
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
  padding: 6px;
  box-shadow: 0 1px 0px 2px rgba(0, 0, 0, 0.2);
  background-color: white;

  > .bar-item {
    flex-grow: 1;
    font-size: 12px;
    &.selected > .t-icon-large {
      color: $base-red;
    }
  }
}
</style>
