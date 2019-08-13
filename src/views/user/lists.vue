<template>
  <div>
    <van-tabs v-model="active" animated title-active-color="#ac0300">
      <van-tab title="全部">
        <!--
            全
            部
            订
        单-->
        <div class="listShow" v-for="(item,index) in listData" :key="index">
          <div class="listFirst">
            <div style="font-size:14px;font-weight:600">订单号：{{item.list_num}}</div>
            <div style="font-size:12px;color:#AC0300">{{item.list_type}}</div>
          </div>
          <div class="listTime">{{item.list_date}}</div>
          <div class="listCard" v-for="(item1 , index) in item.list_msg" :key="index">
            <div class="cardLeft">
              <div style="height:84px;width:84px;margin:0 auto;">
                <img :src="item1.list_img" alt />
              </div>
            </div>
            <div class="cardRight">
              <div class="cardTitle">{{item1.list_title}}</div>
              <div style="display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin-top:15px;font-size:12px;">
                <div>规格：{{item1.list_norms}}</div>
                <div>个数:{{item1.list_num}}</div>
                <div>单价:￥{{item1.list_price}}</div>
              </div>
            </div>
          </div>
          <div class="cardLast">
            共{{item.list_goods_num}}件商品 需付款：
            <span>￥{{item.list_price}}</span>
          </div>
          <div class="btnBar" v-show="item.list_form == 0">
            <div class="btnPay">去付款</div>
            <div class="btnCancel" @click="showToast0">取消订单</div>
          </div>
          <div class="btnBar" v-show="item.list_form == 1">
            <div class="btnPay" @click="showToast1" >提醒发货</div>
            <!-- <div class="btnCancel" @click="showToast0">取消订单</div> -->
          </div>

          <div class="btnBar" v-show="item.list_form == 2">
            <div class="btnReach" @click="showToast2">确认收货</div>
            <!-- <div class="btnCancel">取消订单</div> -->
          </div>
          <div class="btnBar" v-show="item.list_form == 3">
            <div class="btnAgain">再次购买</div>
            <div class="btnDelete">删除订单</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <!-- 
              待
              付
              款
              订
        单-->
        <div
          class="listShow"
          v-for="(item,index) in listData"
          :key="index"
          v-show="item.list_form == 0"
        >
          <div class="listFirst">
            <div style="font-size:14px;font-weight:600">订单号：{{item.list_num}}</div>
            <div style="font-size:12px;color:#AC0300">{{item.list_type}}</div>
          </div>
          <div class="listTime">{{item.list_date}}</div>
          <div class="listCard" v-for="(item1 , index) in item.list_msg" :key="index">
            <div class="cardLeft">
              <div style="height:84px;width:84px;margin:0 auto;">
                <img :src="item1.list_img" alt />
              </div>
            </div>
            <div class="cardRight">
              <div class="cardTitle">{{item1.list_title}}</div>
              <div
                style="display:flex; flex-flow: row nowrap;justify-content: space-between;align-items:center;margin-top:15px;font-size:12px;"
              >
                <div>规格：{{item1.list_norms}}</div>
                <div>个数:{{item1.list_num}}</div>
                <div>单价:￥{{item1.list_price}}</div>
              </div>
            </div>
          </div>
          <div class="cardLast">
            共{{item.list_goods_num}}件商品 需付款：
            <span>￥{{item.list_price}}</span>
          </div>
          <div class="btnBar">
            <div class="btnPay">去付款</div>
            <div class="btnCancel" @click="showToast0">取消订单</div>
          </div>
        </div>
      </van-tab>
       <van-tab title="代发货">
        <!-- 
              待
              发
              货
              订
        单-->
        <div
          class="listShow"
          v-for="(item,index) in listData"
          :key="index"
          v-show="item.list_form == 1"
        >
          <div class="listFirst">
            <div style="font-size:14px;font-weight:600">订单号：{{item.list_num}}</div>
            <div style="font-size:12px;color:#AC0300">{{item.list_type}}</div>
          </div>
          <div class="listTime">{{item.list_date}}</div>
          <div class="listCard" v-for="(item1 , index) in item.list_msg" :key="index">
            <div class="cardLeft">
              <div style="height:84px;width:84px;margin:0 auto;">
                <img :src="item1.list_img" alt />
              </div>
            </div>
            <div class="cardRight">
              <div class="cardTitle">{{item1.list_title}}</div>
              <div
                style="display:flex; flex-flow: row nowrap;justify-content: space-between;align-items:center;margin-top:15px;font-size:12px;"
              >
                <div>规格：{{item1.list_norms}}</div>
                <div>个数:{{item1.list_num}}</div>
                <div>单价:￥{{item1.list_price}}</div>
              </div>
            </div>
          </div>
          <div class="cardLast">
            共{{item.list_goods_num}}件商品 需付款：
            <span>￥{{item.list_price}}</span>
          </div>
           <div class="btnBar" >
            <div class="btnPay" @click="showToast1" >提醒发货</div>
            <!-- <div class="btnCancel" @click="showToast0">取消订单</div> -->
          </div>
        </div>
        <!-- 点击确认收货按钮 弹出框 -->
      </van-tab>
      <van-tab title="待收货">
        <!-- 
              待
              收
              货
              订
        单-->
        <div
          class="listShow"
          v-for="(item,index) in listData"
          :key="index"
          v-show="item.list_form == 2"
        >
          <div class="listFirst">
            <div style="font-size:14px;font-weight:600">订单号：{{item.list_num}}</div>
            <div style="font-size:12px;color:#AC0300">{{item.list_type}}</div>
          </div>
          <div class="listTime">{{item.list_date}}</div>
          <div class="listCard" v-for="(item1 , index) in item.list_msg" :key="index">
            <div class="cardLeft">
              <div style="height:84px;width:84px;margin:0 auto;">
                <img :src="item1.list_img" alt />
              </div>
            </div>
            <div class="cardRight">
              <div class="cardTitle">{{item1.list_title}}</div>
              <div
                style="display:flex; flex-flow: row nowrap;justify-content: space-between;align-items:center;margin-top:15px;font-size:12px;"
              >
                <div>规格：{{item1.list_norms}}</div>
                <div>个数:{{item1.list_num}}</div>
                <div>单价:￥{{item1.list_price}}</div>
              </div>
            </div>
          </div>
          <div class="cardLast">
            共{{item.list_goods_num}}件商品 需付款：
            <span>￥{{item.list_price}}</span>
          </div>
          <div class="btnBar">
            <div class="btnReach" @click="showToast2">确认收货</div>
            <!-- <div class="btnCancel">取消订单</div> -->
          </div>
        </div>
        <!-- 点击确认收货按钮 弹出框 -->
      </van-tab>
      <van-tab title="完成/退货">
        <!-- 
              已
              完
              成
              订
        单-->
        <div
          class="listShow"
          v-for="(item,index) in listData"
          :key="index"
          v-show="item.list_form == 3"
        >
          <div class="listFirst">
            <div style="font-size:14px;font-weight:600">订单号：{{item.list_num}}</div>
            <div style="font-size:12px;color:#AC0300">{{item.list_type}}</div>
          </div>
          <div class="listTime">{{item.list_date}}</div>
          <div class="listCard" v-for="(item1 , index) in item.list_msg" :key="index">
            <div class="cardLeft">
              <div style="height:84px;width:84px;margin:0 auto;">
                <img :src="item1.list_img" alt />
              </div>
            </div>
            <div class="cardRight">
              <div class="cardTitle">{{item1.list_title}}</div>
              <div
                style="display:flex; flex-flow: row nowrap;justify-content: space-between;align-items:center;margin-top:15px;font-size:12px;"
              >
                <div>规格：{{item1.list_norms}}</div>
                <div>个数:{{item1.list_num}}</div>
                <div>单价:￥{{item1.list_price}}</div>
              </div>
            </div>
          </div>
          <div class="cardLast">
            共{{item.list_goods_num}}件商品 需付款：
            <span>￥{{item.list_price}}</span>
          </div>
          <div class="btnBar">
            <div class="btnAgain">再次购买</div>
            <div class="btnDelete">删除订单</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 点击取消订单 弹出框 -->
    <van-popup v-model="show0">
        <div class="showCard">
            <div style="width:102px;height:101px;margin:0 auto;margin-top:40px;">
                <img :src="showImg0" alt="">
            </div>
            <div style="font-size:18px;margin-top:20px;font-weight:600">确定删除订单吗？</div>
            <div style="display:flex; flex-flow: row nowrap;justify-content: space-between;align-items: center;">
                <div style="width:82px;height:26px;background:#8A0200;line-height:26px;font-size:14px;color:white;margin: 0 auto;margin-top:30px;" @click="hiddenShow">取消</div>
                <div style="width:82px;height:26px;background:#E9E9E9;line-height:26px;font-size:14px;color:white;margin: 0 auto;margin-top:30px;">确定</div>
            </div>
        </div>
    </van-popup>
    <!-- 点击提醒发货 弹出框 -->
    <van-popup v-model="show1">
        <div class="showCard" style="height:50px;">
          <div style=" position:absolute;top:-25px;right:5px" @click="hiddenShow">
                <van-icon name="cross" size="20" />
            </div>
            <div style="font-size:18px;margin-top:30px;font-weight:600;color:#8A0200">提醒发货成功,请注意查收</div>
        </div>
    </van-popup>

    <!-- 点击确认收货 弹出框 -->
    <van-popup v-model="show2">
        <div class="showCard">
            <div style=" position:absolute;top:-20px;right:10px" @click="hiddenShow">
                <van-icon name="cross" size="20" />
            </div>
            <div style="width:72px;height:81px;margin:0 auto;margin-top:40px;">
                <img :src="showImg1" alt="">
            </div>
            <div style="font-size:18px;margin-top:20px;">确认收货</div>
            <div style="font-size:14px;margin-top:13px;">订单 1234567890123 确认收货</div>
            <div style="width:82px;height:26px;background:#8A0200;line-height:26px;font-size:14px;color:white;margin: 0 auto;margin-top:20px;">确认</div>
        </div>
    </van-popup>
  </div>
</template>
<script>
import { Tab, Tabs, Dialog } from "vant";
import { Popup } from "vant";
export default {
  data() {
    return {
      //提示框
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      showImg0:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1565679088&di=6df86279f70003ea2466a06c05aff6da&src=http://s4.sinaimg.cn/mw690/0069EZ80zy6UMlDzIFZ93&690",
      showImg1:require("../../assets/images/showImg.png"),
      listData: [
        //   list_form:0 待付款 1 待发货 2代收货 3已完成
        {
          list_form: 0,
          list_num: "12345678901123",
          list_type: "等待付款",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            },
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】2代 雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        },
        {
          list_form: 0,
          list_num: "12345678901123",
          list_type: "等待付款",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        },
         {
          list_form: 1,
          list_num: "12456468901123",
          list_type: "等待发货",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        },
        {
          list_form: 2,
          list_num: "12456468901123",
          list_type: "等待收货",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        },
        {
          list_form: 2,
          list_num: "12344156413211",
          list_type: "等待收货",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        },
        {
          list_form: 3,
          list_num: "123898798413211",
          list_type: "交易成功",
          list_date: "2019-03-09",
          list_goods_num: 10,
          list_price: "660.00",
          list_msg: [
            {
              list_img: require("../../assets/images/goodsImg.png"),
              list_title:
                "【雪域珍宝 药在甘露】雪域珍宝药在甘露雪域珍宝药在甘露雪域珍宝药在甘露",
              list_norms: "6丸/盒 1g/丸",
              list_num: 5,
              list_price: 66.0
            }
          ]
        }
      ],
      active: "",
    };
  },
  created(){
      this.active = this.$route.params.active + 1;
  },
  methods: {
    showToast0() {
      this.show0 = true;
    },
    showToast1() {
      this.show1 = true;
    },
    showToast2() {
      this.show2 = true;
    },
    showToast3() {
      this.show3 = true;
    },
    hiddenShow() {
      this.show0 = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Popup.name]: Popup
  }
};
</script>
<style scoped>
.listShow {
  width: 100%;
  background: white;
  /* margin-bottom: 10px; */
  padding: 10px;
  border-bottom: 5px solid #dddddd;
}
.listFirst {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.listTime {
  color: #999;
  font-size: 12px;
  margin-top: 10px;
}
.listCard {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  /* align-items: center; */
  margin-top: 15px;
}
.cardTitle {
  font-size: 14px;
}
.cardLast {
  font-size: 10px;
  text-align: right;
  padding-bottom: 17px;
  border-bottom: 1px solid #dddddd;
}
.cardLast span {
  font-size: 18px;
}
.btnBar {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
}
.btnPay,
.btnCancel,
.btnReach,
.btnAgain,
.btnDelete {
  width: 65px;
  height: 22px;
  font-size: 12px;
  color: white;
  background: #ac0300;
  text-align: center;
  line-height: 22px;
  border-radius: 3px;
  margin-left: 10px;
}
.btnCancel,
.btnDelete {
  color: #333333;
  border: 1px solid #cccccc;
  background: white;
}
.showCard {
    width: 235px;
    height:250px;
    background:white;
    text-align: center;
    position: relative;
   
}
</style>