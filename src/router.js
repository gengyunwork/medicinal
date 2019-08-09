import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
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
      meta: {
        title: "分类"
      },
      component: () => import("./views/classify/index.vue")
    },
    {
      path: "/cart",
      name: "cart",
      meta: {
        title: "购物车"
      },
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
      meta: {
        title: "分销中心"
      },
      component: () => import("./views/user/distribute/index.vue")
    },
    {
      path: "/brokerage",
      name: "brokerage",
      meta: {
        title: "我的佣金"
      },
      component: () => import("./views/user/distribute/brokerage.vue")
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
    },
    {
      path: "/withdrawsuccess",
      name: "withdrawsuccess",
      meta: {
        title: "提现成功"
      },
      component: () => import("./views/user/distribute/withdrawSuccess.vue")
    },
    {
      path: "/withdraw",
      name: "withdraw",
      meta: {
        title: "提现"
      },
      component: () => import("./views/user/distribute/withdraw.vue")
    },
    {
      path: "/record",
      name: "record",
      meta: {
        title: "提现记录"
      },
      component: () => import("./views/user/distribute/record.vue")
    },
    {
      path: "/explain",
      name: "explain",
      meta: {
        title: "分销说明"
      },
      component: () => import("./views/user/distribute/explain.vue")
    },
    {
      path: "/detail",
      name: "detail",
      meta: {
        title: "商品详情"
      },
      component: () => import("./views/commodity/commodity.vue")
    }
  ]
});