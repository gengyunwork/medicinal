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
    }
  ]
});
