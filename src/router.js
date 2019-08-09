import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      meta: {
        title: "甘露藏药"
      },
      component: () => import("./views/home/index.vue")
    },
    {
      path: "/classify",
      name: "classify",
      component: () => import("./views/classify/index.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/cart/index.vue")
    },
    {
      path: "/user",
      name: "user",
      meta: {
        title: "我的"
      },
      component: () => import("./views/user/index.vue")
    },
    {
      path: "/distribute",
      name: "distribute",
      component: () => import("./views/user/distribute/index.vue")
    },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () => import("./views/user/distribute/withdraw.vue")
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      meta: {
        title: "关于我们"
      },
      component: () => import("./views/user/aboutUs.vue")
    },
    {
      path: "/myTeam",
      name: "myTeam",
      meta: {
        title: "我的团队"
      },
      component: () => import("./views/user/distribute/myTeam.vue")
    }
  ]
});
