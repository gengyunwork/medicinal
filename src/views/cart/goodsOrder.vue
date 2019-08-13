<template>
  <div>
    <van-cell v-if="!addressData" is-link title="添加您的收货地址" icon="add-o" />
    <van-cell
      v-else
      is-link
      :title="addressHeaderText"
      :label="addressData.address"
      @click="showAddressPane"
      icon="location-o"
    />
    <div class="p-s bg-grey"></div>
    <gy-goods-card
      v-for="item in goodList"
      :key="item.id"
      :goodsData="item"
      :stepChangeFunc="updateNumber"
      @numberChange="computedPrice"
    ></gy-goods-card>
    <van-cell title="配送方式" value="快递 免费" :border="false" />
    <van-field v-model="remarks" label="备注" placeholder="在此填写备注信息" />
    <div class="text-right p">
      共{{count}}件商品，实付款：
      <span class="text-red">￥{{cash}}</span>
    </div>
    <div class="bottom-bar">
      <small class="mr">共{{count}}件</small>
      <span>小计：</span>
      <span class="text-red mr">￥{{cash}}</span>
      <span class="radius px-l py-s bg-red text-white" @click="submitOrder">提交订单</span>
    </div>
    <!-- 地址选择 -->
    <div
      class="address-pane"
      :class="{'show':showSelectedAddressPane}"
      @click="showSelectedAddressPane=false"
    >
      <div style="width:80%;">
        <van-row
          v-for="item in addressList"
          :key="item.id"
          class="p"
          @click.native="selectAddress(item.id)"
          style="border-bottom:1px solid #eee;"
        >
          <van-col span="20">
            <header>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.mobile}}</header>
            <div class="text-grey mt text-small">{{item.address}}</div>
          </van-col>
          <van-col span="4">
            <van-icon name="checked" color="#ac0300" v-show="selectedAddressID == item.id"></van-icon>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import goodsCard from "../../components/goodsCard.vue";
export default {
  data() {
    return {
      cash: 0,
      count: 0,
      remarks: "",
      selectedAddressID: 0,
      showSelectedAddressPane: false,
      goodList: [
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
          goods_num: 1
        },
        {
          id: 2,
          goods_img: require("../../assets/images/goodsImg.png"),
          goods_title: "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝 ",
          goods_norms: "6丸/盒，1g/丸",
          goods_main: "清热解毒，益养肝胃，清热解毒，益养肝胃",
          goods_price: "666.00",
          goods_num: 1
        }
      ],
      addressData: {
        id: 0,
        name: "李若云",
        mobile: "13685469635",
        address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
        isDefault: true
      },
      addressList: [
        {
          id: 0,
          name: "李若云",
          mobile: "13685469635",
          address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
          isDefault: true
        },
        {
          id: 2,
          name: "李若",
          mobile: "13685469635",
          address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
          isDefault: false
        },
        {
          id: 3,
          name: "李云",
          mobile: "13685469635",
          address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
          isDefault: false
        }
      ]
    };
  },
  mounted() {
    console.log("1");
    this.computedPrice();
  },
  methods: {
    updateNumber(data) {
      console.log("updateNumber");
    },
    computedPrice() {
      this.count = 0;
      this.cash = this.goodList.reduce((pre, cur) => {
        this.count += cur.goods_num;
        return pre + cur.goods_num * cur.goods_price;
      }, 0);
    },
    submitOrder() {
      console.log("submit order");
    },
    selectAddress(id) {
      this.selectedAddressID = id;
    },
    showAddressPane() {
      this.showSelectedAddressPane = true;
    },
    hideAddressPane() {
      this.showSelectedAddressPane = false;
    }
  },
  computed: {
    addressHeaderText() {
      return this.addressData.name + "   " + this.addressData.mobile;
    }
  },
  components: {
    [goodsCard.name]: goodsCard
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  padding: 12px;
  text-align: right;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.address-pane {
  position: fixed;
  top: 0;
  right: -100vw;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow-y: auto;
  display: flex;
  opacity:0;
  transition: right .5s ,opacity 1s;
  justify-content: flex-end;
  > div {
    background-color: white;
  }
  &.show {
    right: 0vw;
    opacity:1;
  }
}
</style>

