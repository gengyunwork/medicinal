<template>
  <div style="width:100vw;overflow-x:hidden;">
    <!-- 顶部tab选项卡 -->
    <van-tabs swipeable @change="tabChange">
      <van-tab title="商品">
        <!-- 顶部轮播 -->
        <van-swipe :autoplay="3000" :height="300">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="height:100%;" />
          </van-swipe-item>
        </van-swipe>
        <!-- 商品名 -->
        <div class="pl pt" style="display:flex;line-height:1.5;align-items:center;">
          <div style="font-weight:550;flex:1;">【雪域珍宝 药在甘露】雪域珍宝 药在甘露雪域珍宝 药在甘露雪域珍宝 药在甘露雪域珍宝 药在甘露</div>
          <div style="transform:translateX(12px);">
            <span style="background:#EEE;padding:2px 16px;border-radius:10px;">分享</span>
          </div>
        </div>
        <!-- 价格 -->
        <van-cell value="￥360.0" value-class="text-red text-large text-bold" />
        <van-cell is-link value="规格：6丸/盒，1g/丸" value-class="text-grey" />
        <!-- 配送 -->
        <div style="height:8px;background:#f5f5f5;"></div>
        <van-cell is-link label="[可配送]" label-class="text-red">
          <template slot="title">
            <div>送至：黑龙江哈尔滨市道里区</div>
          </template>
        </van-cell>

        <van-cell is-link>
          <template slot="title">
            <div style="font-size:8px;">
              说明：
              <van-icon class="mr-s" color="#67B3A6" name="award-o"></van-icon>药监认证&nbsp;
              <van-icon class="mr-s" color="#67B3A6" name="completed"></van-icon>假一赔十&nbsp;
              <van-icon class="mr-s" color="#FF0000" name="certificate"></van-icon>甘露发货&售后
            </div>
          </template>
          <template slot="label">
            <van-icon
              name="warning-o"
              style="vertical-align: middle;font-size:14px;margin:0 6px 0 2rem;"
            ></van-icon>
            <span>不支持七天无理由退换货</span>
          </template>
        </van-cell>
        <div style="height:8px;background:#f5f5f5;"></div>
        <!-- 评价 -->
        <van-cell is-link>
          <template slot="title">评价（999）</template>
          <template>
            好评度
            <span class="text-red">98%</span>
          </template>
        </van-cell>
        <div class="p">
          <van-tag color="#f2826a" class="mr" round>药效好</van-tag>
          <van-tag color="#f2826a" class="mr" round>见效快</van-tag>
        </div>
        <gy-recommend
          v-for="index in 3"
          :key="index"
          class="recommend-card"
          :commentData="commentData"
        ></gy-recommend>
        <div class="p text-center" style="border-bottom:6px solid #f5f5f5;">
          <van-button plain round size="small">查看更多评价</van-button>
        </div>
        <!-- 详情 -->
        <div v-html="detail">45456</div>
        <van-divider>已经到底了</van-divider>
      </van-tab>
      <van-tab title="评价">
        <gy-recommend
          v-for="index in 10"
          :key="index"
          class="recommend-card"
          :commentData="commentData"
        ></gy-recommend>
      </van-tab>
      <van-tab title="详情">详情</van-tab>
    </van-tabs>
    <div class="footer">
      <div class="icons">
        <img src="../../assets/images/commodity/service.jpg" alt />
        <br />在线咨询
      </div>
      <div class="icons">
        <img src="../../assets/images/commodity/cart-grey.jpg" alt />
        <br />购物车
      </div>
      <div class="icons">
        <img src="../../assets/images/commodity/favorite.jpg" alt />
        <br />收藏
      </div>
      <div class="footerBtn">
        <span @click="insertIntoCart">加入购物车</span>
        <span @click="purchase">立即购买</span>
      </div>
    </div>
    <div class="promise"></div>
  </div>
</template>

<script>
import { Tag } from "vant";
import RecommentCard from "./recommendCard";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      detail: "",
      commentData: {
        username: "李若生",
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        date: "2019-06-26",
        content:
          "我是我们村第一一个在网上上买东西的人。这里大部分人是不网购的。他们买东西价格一般不超过五块，听说我在网上买东西后，整个村都震惊了，村长跑到我家里对我爸说我是不是疯了?说这日子没法过了，让我出去租房子住，面对重重压力， 我坚持要买。我举着它，骄傲的站在村口，他们就跳井， 吓得我赶紧收起宝贝，挤出人群落荒而逃。为测试我立刻去我们村高达100米山上村长家客厅里测试宝贝效果，用完后，在全村人羡慕的目光中，仰首挺胸扬长而去",
        imageList: [
          "https://img.yzcdn.cn/vant/cat.jpeg",
          "https://img.yzcdn.cn/vant/cat.jpeg"
        ],
        commodity: "雪域珍宝",
        favorite: 20,
        comment: 5
      }
    };
  },
  methods: {
    tabChange(index) {
      switch (index) {
        case 0:
          // 商品页
          break;
        case 1:
          // 评价
          break;
        case 2:
          // 详情
          break;
      }
    },
    insertIntoCart() {
      console.log("加入购物车");
    },
    purchase() {
      console.log("立即购买");
    }
  },
  components: {
    [Tag.name]: Tag,
    [RecommentCard.name]: RecommentCard
  }
};
</script>

<style lang="scss" scoped>
.recommend-card {
  border-bottom: 4px solid #f5f5f5;
}
.recommend-card:last-of-type {
  border: 0 solid white;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  border-top: 1px solid #eee;
  padding: 8px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}
.icons {
  text-align: center;
  > img {
    width: 30px;
    height: 30px;
  }
}
.footerBtn {
  border-radius: 18px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $base-red;
  color: white;
  > span {
    display: inline-block;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
  }
  > span:first-child {
    background-color: #ee9f06;
  }
}
.promise {
  position: fixed;
  height: 60vh;
  width: 100vw;
  top: 100vh;
  left: 0;
  background-color: white;
  &.show {
    top: 60vh;
  }
}
</style>
