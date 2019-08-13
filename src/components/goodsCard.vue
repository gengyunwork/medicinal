//  订单卡片 购物车卡片  上下分隔
//  参数@Params
//     @params data { Object }
//  goodsData具体参数
//             @id     { Number }    商品id
//             @imgUrl { goods_img }    商品封面地址
//             @title  { goods_title }    商品标题
//             @norms  { goods_norms }    商品规格
//             @main   { goods_main }    商品主治
//             @price  { goods_price }    商品价格
//             @num    { goods_num }    商品个数
//  配置参数
//  @config
//       @imgHeight { String }  图片高度，默认100px

// 事件@event
        numberChagne
<template>
  <div class="card">
    <div class="card_left">
      <div style="width:86px;height:62px;">
        <img :src="goodsData.goods_img" alt />
      </div>
    </div>
    <div class="card_right">
      <div class="card_title">{{ goodsData.goods_title }}</div>
      <div class="card_norms">规格:{{ goodsData.goods_norms }}</div>
      <div class="card_main">主治:{{ goodsData.goods_main }}</div>
      <div class="card_last">
        <div class="card_price">
          ￥
          <span>{{goodsData.goods_price}}</span>
        </div>
        <van-stepper
          :value="goodsData.goods_num"
          async-change
          @change="numChange"
          input-width="40px"
          button-size="20px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Stepper } from "vant";
export default {
  data() {
    return {
      goods_img: "",
      goods_title: "",
      goods_norms: "",
      goods_main: "",
      goods_price: "",
      goods_num: ""
    };
  },
  computed: {
    // goods_total(){
    //     return this.goods_num*this.goods_price;
    // }
  },
  created() {
    //  console.log(this.goodsData)
  },
  mounted() {},

  methods: {
    numChange(val) {
      if (val == this.goodsData.goods_num) {
        return;
      }
      // TODO：请求后台，修改购物车信息
      this.goodsData.goods_num = val;
      this.$emit("numberChange", this.goodsData);
    }
  },
  name: "gy-goods-card",
  props: {
    goodsData: {
      type: Object,
      value: () => {
        return {
          id: "",
          goods_img: "",
          goods_title: "",
          goods_norms: "",
          goods_price: "",
          goods_num: "",
          goods_main: ""
        };
      }
    }
  },
  components: {
    [Stepper.name]: Stepper
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.card_right {
  padding-left: 6px;
}
.card_title {
  font-size: 10px;
  font-weight: 600;
  color: #333;
}
.card_norms,
.card_main {
  font-size: 8px;
  color: #999;
  margin-top: 8px;
}
.card_last {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.card_price {
  color: #ac0300;
  font-size: 10px;
}
.card_price span {
  font-size: 15px;
}
</style>
