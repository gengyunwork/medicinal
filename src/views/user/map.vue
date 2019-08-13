<template>
  <div>
    <div style="width:100%;height:230px;font-size:14px;">
      <img :src="mapImg" alt />
    </div>
    <div style="padding: 0 20px;">
      <div style="margin-top:25px;">{{name}}</div>
      <div style="margin-top:25px;">药房地址 : {{address}}</div>
      <div style="margin-top:25px;">
        药房座机 : 
        <span v-for="item in phoneList" :key="item" style="margin-right:10px;">{{item.num}}</span>
      </div>
      <div style="margin-top:25px;">招商热线 : {{phone}}</div>
      <div style="margin-top:25px;">
        药师热线 :
        <div v-for="item in phoneList2" :key="item" style="margin-top:15px;">{{item.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapImg: require("../../assets/images/userImg/map.png"),
      name: "西藏甘露藏药黑龙江总直营总店（甘露堂大药房）",
      address: "哈尔滨南岗区理治街2号",
      phoneList: [{ num: "0451-51807979" }, { num: "0451-57673311" }],
      phone: "18045086788",
      phoneList2: [
        { num: "17766588133 (宋老师 微信同步)" },
        { num: "18645119959 (陈老师 微信同步)" }
      ]
    };
  }
};
</script>

<style>
</style>
