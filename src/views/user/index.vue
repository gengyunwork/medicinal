<template>
  <div>
    <div class="Head">
      <div class="headImg">
        <img :src="userImg" alt />
      </div>
      <div style="float:left; margin-left: 15px; margin-top:5px">
        <div class="headName">
          <span>{{userName}}</span>
        </div>
        <div class="headBtn">
          <van-icon name="setting" color="white" />
          <div>
            <span>账号设置</span>
          </div>
        </div>
      </div>
      <br />
      <!-- 选项卡 -->
      <div class="headBar">
        <div class="headItem" v-for="(item,index) in headList" :key="index">
          <div style="width:30px;height:30px;margin:auto;">
            <!-- <img :src="item.img" alt /> -->
            <van-icon :name="item.img" size="30" :info="item.num" />
          </div>
          <div style="margin-top:10px;">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>

      <div class="bodyBar">
        <div class="bodyShow">
          <span>更多功能</span>
        </div>
        <div class="bodyBar2">
          <div
            class="bodyItem"
            v-for="(item, index) in bodyList"
            :key="index"
            @click="linkToOthers(item.id)"
          >
            <div style="width:20px;height:auto;margin:auto">
              <img :src="item.img" alt />
            </div>
            <div style="margin-top:10px;">
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/userImg/userImg.png"),
      userName: "章鱼哥",
      headList: [
        {
          img: require("../../assets/images/userImg/noPay.png"),
          title: "待付款",
          num: 9
        },
        {
          img: require("../../assets/images/userImg/noSend.png"),
          title: "待发货",
          num: 9
        },
        {
          img: require("../../assets/images/userImg/noCome.png"),
          title: "待收货"
        },
        {
          img: require("../../assets/images/userImg/finish.png"),
          title: "售货/退款"
        }
      ],
      bodyList: [
        {
          img: require("../../assets/images/userImg/mine1.png"),
          title: "我的分销商",
          id: 1
        },
        {
          img: require("../../assets/images/userImg/mine2.png"),
          title: "我的名片",
          id: 2
        },
        {
          img: require("../../assets/images/userImg/mine3.png"),
          title: "我的收藏",
          id: 3
        },
        {
          img: require("../../assets/images/userImg/mine4.png"),
          title: "实体地图",
          id: 4
        },
        {
          img: require("../../assets/images/userImg/mine5.png"),
          title: "地址管理",
          id: 5
        },
        {
          img: require("../../assets/images/userImg/mine6.png"),
          title: "我的足迹",
          id: 6
        },
        {
          img: require("../../assets/images/userImg/mine7.png"),
          title: "联系客服",
          id: 7
        },
        {
          img: require("../../assets/images/userImg/mine8.png"),
          title: "药房资质",
          id: 8
        },
        {
          img: require("../../assets/images/userImg/mine9.png"),
          title: "关于我们",
          id: 9
        }
      ]
    };
  },
  methods: {
    linkToOthers(e) {
      console.log(e);
      if (e == 1) {
        this.$router.push({ path: "/distribute" });
      }
      if (e == 9) {
        this.$router.push({ path: "/aboutUs" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Head {
  width: 100%;
  height: 140px;
  background: #ac0300;
  padding: 15px;
}
.headImg {
  width: vw(132);
  height: auto;
  float: left;
}
.headName {
  color: white;
  font-size: 16px;
}
.headBtn {
  width: vw(164);
  height: 23px;
  background: #bd3533;
  border-radius: 3px;
  line-height: 23px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 13px;
}
.headBtn span {
  color: white;
  font-size: 12px;
}
.headBar {
  width: 100%;
  height: 92px;
  background: white;
  border-radius: 15px;
  margin-top: 17px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
}
.headItem,
.bodyItem {
  width: 25%;
  text-align: center;
  padding-top: 20px;
}
.bodyBar {
  width: 100%;
  height: 285px;
  background: white;
  margin-top: 10px;
  border-radius: 15px;
}
.bodyShow {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  margin-left: 8px;
  border-bottom: 1px solid #f5f5f5;
}
.bodyBar2 {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
</style>

