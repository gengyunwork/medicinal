<template>
  <div style="padding-top:40px;">
    <div class="headImg" style>
      <img :src="headImg" alt />
    </div>
    <div class="headTitle">
      <span>甘露藏药</span>
    </div>
    <div class="aboutUsBar" v-for="(item,index) in aboutUsBar" :key="index">
      <div class="aboutUsItem">
        <div style="font-size:16px;">
          <span>{{item.title}}</span>
        </div>
        <div style="font-size:13px;color:#666666">
          <span>{{item.title2}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headImg: require("../../assets/images/userImg/aboutUs.jpg"),
      aboutUsBar: [
        { title: "官方公众号", title2: "甘露藏药专卖" },
        { title: "官方网站", title2: "glzy.gengyunweb.com" },
        { title: "客服电话", title2: "0451-57613311" },
        { title: "公司邮箱", title2: "ganlu@himg.com" }
      ]
    };
  }
};
</script>

<style>
.headImg {
  width: 41px;
  height: auto;
  margin: auto;
}
.headTitle {
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
  font-weight: 400;
  margin-bottom: 24px;
}
.aboutUsBar {
  width: 92%;
  margin-left: 4%;
  /* margin-top: 24px; */
}
.aboutUsItem {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgba(221, 221, 221, 1);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
