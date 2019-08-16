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
      path: "/myCard",
      name: "myCard",
      meta: {
        title: "我的名片"
      },
      component: () => import("./views/user/myCard.vue")
    },
    {
      path: "/map",
      name: "map",
      meta: {
        title: "实体地图"
      },
      component: () => import("./views/user/map.vue")
    },
    {
      path: "/aptitude",
      name: "aptitude",
      meta: {
        title: "药房资质"
      },
      component: () => import("./views/user/aptitude.vue")
    },
    {
      path: "/settings",
      name: "settings",
      meta: {
        title: "账号设置"
      },
      component: () => import("./views/user/settings/index.vue")
    },
    {
      path: "/changeName",
      name: "changeName",
      meta: {
        title: "更换昵称"
      },
      component: () => import("./views/user/settings/changeName.vue")
    },
    {
      path: "/changePhone",
      name: "changePhone",
      meta: {
        title: "设置手机号"
      },

      component: () => import("./views/user/settings/changePhone.vue")
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
    },
    {
      path: "/address",
      name: "address",
      meta: {
        title: "地址管理"
      },
      component: () => import("./views/user/address/index.vue")
    },
    {
      path: "/addressform",
      name: "addressform",
      meta: {
        title: "地址管理"
      },
      component: () => import("./views/user/address/addressForm.vue")
    },
    {
      path: "/lists",
      name: "lists",
      meta: {
        title: "我的订单"
      },
      component: () => import("./views/user/lists.vue")
    }, 
    {
      path: "/orderdetail",
      name: "orderdetail",
      meta: {
        title: "订单详情"
      },
      component: () => import("./views/cart/goodsOrder.vue")
    }
  ]
})