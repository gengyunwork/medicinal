import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "normalize.css/normalize.css";
import "./assets/style/resetVant.scss";

import {
  Button
} from "vant";
Vue.use(Button);

import {
  Cell,
  CellGroup
} from "vant";
Vue.use(Cell).use(CellGroup);

import {
  Icon
} from "vant";
Vue.use(Icon);

import {
  Image
} from "vant";
Vue.use(Image);

import {
  Row,
  Col
} from "vant";
Vue.use(Row).use(Col);

import {
  Popup
} from "vant";
Vue.use(Popup);

import {
  Toast
} from "vant";
Vue.use(Toast);

import {
  Grid,
  GridItem
} from "vant";
Vue.use(Grid).use(GridItem);

import {
  Lazyload
} from "vant";

import {
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(Swipe).use(SwipeItem);

import {
  NoticeBar
} from 'vant';

Vue.use(NoticeBar);
import {
  Tab,
  Tabs
} from 'vant';

Vue.use(Tab).use(Tabs);


// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
