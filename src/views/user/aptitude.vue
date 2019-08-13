<template>
  <div style="padding:24px;">
    <div class="title">{{title}}</div>
    <div class="content">{{content}}</div>
    <div class="content">{{content2}}</div>

    <!-- 轮播图 -->
    <div>
      <van-swipe :loop="false" :width="300" :show-indicators="false">
        <van-swipe-item v-for="(item , index) in imgList" :key="index" style="padding:0;">
          <div style="width:274px;height:auto;">
            <img :src="item.img" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "甘露堂大药房",
      content:
        "甘露堂大药房是西藏甘露藏药股份有限公司（原西藏自治区藏药厂）驻哈直营专卖总店。店内经营七十味珍珠丸、仁青常觉、人清芒觉、坐珠达西、二十味松石丸等百余种藏成药，涵盖心脑血管，消化，泌尿，妇科，肝胆，皮肤等各科疾病用药。",
      content2:
        "独特的高原环境造就了藏药独特的疗效，近千年来的应用证明藏药在治疗慢性病疑难病方面具有神奇疗效.",
      imgList: [
        { img: require("../../assets/images/userImg/aptitude1.png") },
        { img: require("../../assets/images/userImg/aptitude1.png") },
        { img: require("../../assets/images/userImg/aptitude1.png") },
        { img: require("../../assets/images/userImg/aptitude1.png") }
      ]
    };
  }
};
</script>

<style>
.title {
  font-size: 13px;
  font-weight: 600;
}
.content {
  color: #666666;
  font-size: 12px;
  line-height: 20px;
  margin-top: 17px;
}
.van-swipe-item {
    padding: 0;
}
</style>
