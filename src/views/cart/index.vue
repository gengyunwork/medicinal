<template>
  <div>
    <!-- 购物车为空时 -->
    <div
      v-if="cartList.length==0"
      class="text-center bg-grey"
      style="position:absolute;top:30%;width:100vw;line-height:2;"
    >
      <img src="../../assets/images/cartbg.png" style="width:60%;" srcset />
      <p>购物车还是空的</p>
      <router-link
        to="/classify"
        style="display:inline-block;padding:0px 16px;border:2px solid #ac0300;"
        class="radius"
      >去逛逛</router-link>
    </div>
    <!-- 购物车列表 -->
    <template v-else>
      <div class="cart-item" v-for="(good, index) in cartList" :key="index">
        <van-icon v-show="!good.checked" name="circle" @click="checkItem(good)"></van-icon>
        <van-icon v-show="good.checked" name="checked" color="#ac0300" @click="checkItem(good)"></van-icon>
        <gy-goods-card :goodsData="good" @numberChange="updateNumber"></gy-goods-card>
      </div>
    </template>
    <div class="bottom-bar">
      <div>
        <van-icon
          :name="selectedAll?'checked':'circle'"
          :color="selectedAll?'#ac0300':'#000'"
          @click="toggleSelectAll"
          style="vertical-align:middle;"
        ></van-icon>&nbsp;全选
        <span class="ml-l">合计:￥{{cash}}</span>
      </div>
      <div>
        <van-icon
          name="delete"
          @click="deleteCart"
          size="18"
          style="vertical-align:middle;margin-right:16px;"
        ></van-icon>
        <span class="bg-red text-white radius px-l py-s" @click="comfirm">结算</span>
      </div>
    </div>
  </div>
</template>

<script>
import goodsCard from "../../components/goodsCard.vue";
export default {
  data() {
    return {
      selectedAll: false,
      cash: 0,
      cartList: [
        {
          id: 0,
          goods_img: require("../../assets/images/goodsImg.png"),
          goods_title: "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝 ",
          goods_norms: "6丸/盒，1g/丸",
          goods_main: "清热解毒，益养肝胃，清热解毒，益养肝胃",
          goods_price: "666.00",
          goods_num: 1
        },
        {
          id: 1,
          goods_img: require("../../assets/images/goodsImg.png"),
          goods_title: "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝 ",
          goods_norms: "6丸/盒，1g/丸",
          goods_main: "清热解毒，益养肝胃，清热解毒，益养肝胃",
          goods_price: "666.00",
          goods_num: 10
        },
        {
          id: 2,
          goods_img: require("../../assets/images/goodsImg.png"),
          goods_title: "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝 ",
          goods_norms: "6丸/盒，1g/丸",
          goods_main: "清热解毒，益养肝胃，清热解毒，益养肝胃",
          goods_price: "666.00",
          goods_num: 1
        },
        {
          id: 3,
          goods_img: require("../../assets/images/goodsImg.png"),
          goods_title: "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝 ",
          goods_norms: "6丸/盒，1g/丸",
          goods_main: "清热解毒，益养肝胃，清热解毒，益养肝胃",
          goods_price: "666.00",
          goods_num: 1
        }
      ]
    };
  },
  mounted() {
    this.cartList = this.cartList.map((item, index) => {
      this.$set(this.cartList[index], "checked", false);
      return item;
    });
  },
  watch: {},
  methods: {
    checkItem(good) {
      good.checked = !good.checked;
      this.computedPrice();
    },
    toggleSelectAll() {
      this.selectedAll = !this.selectedAll;
      this.cartList.forEach(item => (item.checked = this.selectedAll));
      this.computedPrice();
    },
    updateNumber(data) {
      this.computedPrice();
    },
    computedPrice() {
      this.cash = this.cartList.reduce((pre, cur) => {
        return pre + (cur.checked ? cur.goods_num * cur.goods_price : 0);
      }, 0);
    },
    comfirm() {
      console.log(this.cash);
    },
    deleteCart() {
      console.log(this.cartList.filter(item => item.checked));
    }
  },
  components: {
    [goodsCard.name]: goodsCard
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.bottom-bar {
  position: absolute;
  bottom: 56px;
  left: 0;
  right: 0;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
}
</style>

