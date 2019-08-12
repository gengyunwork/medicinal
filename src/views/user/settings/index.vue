<template>
  <div style="width:100%;">
    <div class="userBar">
      <span class="userWord">头像</span>
      <div style="width:32px;height:32px;">
        <img :src="userImg" alt />
      </div>
    </div>
    <div class="userBar" @click="linkToChangePhone">
      <span class="userWord">手机号</span>
      <div class="exchangePhone">
        <span style="font-size:10px;color:#999;">{{user_phone}}</span>
        <van-icon name="arrow" size="16" color="#999999" />
      </div>
    </div>
    <div class="userBar" @click="linkToChangeName">
      <span class="userWord">昵称</span>
      <div class="exchangeName">
        <span style="font-size:10px;color:#999;">{{user_name}}</span>
        <van-icon name="arrow" size="16" color="#999999" />
      </div>
    </div>
    <div class="userBar" @click="aaa">
      <span class="userWord">性别</span>
      <div class="exchangeSex">
        <span style="font-size:10px;color:#999;">{{user_sex}}</span>
        <van-icon name="arrow" size="16" color="#999999" />
      </div>
    </div>

    <div>
      <van-dialog v-model="show" :showConfirmButton="false" :closeOnClickOverlay="true">
        <div class="head">
          <div class="title">性别选择</div>
          <van-icon name="close" class="icon" :size="25" @click="hiddenShow" />
        </div>
        <div class="body" v-if="male" @click="changeSex">
          <div style="text-align:center">
            <div style="width:60px;height:60px;">
              <img :src="male2" alt />
            </div>
            <div style="margin-top:15px;font-size:18px;color:#8A0200">男</div>
          </div>
          <div style="text-align:center">
            <div style="width:60px;height:60px;">
              <img :src="female1" alt />
            </div>
            <div style="margin-top:15px;font-size:18px;">女</div>
          </div>
        </div>

        <div class="body" v-else @click="changeSex">
          <div style="text-align:center">
            <div style="width:60px;height:60px;">
              <img :src="male1" alt />
            </div>
            <div style="margin-top:15px;font-size:18px;">男</div>
          </div>
          <div style="text-align:center">
            <div style="width:60px;height:60px;">
              <img :src="female2" alt />
            </div>
            <div style="margin-top:15px;font-size:18px;color:#8A0200">女</div>
          </div>
        </div>
        <div style="margin-top:14px;font-size:14px;text-align:center">
          性别选择后将不能修改
        </div>
        <div style="width:83px;height:23px;background:#8A0200;color:white;line-height:23px;text-align:center;margin:15px auto;" @click="returnSex">
          确定
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
export default {
  data() {
    return {
      userImg: require("../../../assets/images/userImg/userImg.png"),
      user_name: "王建强",
      user_phone: "请绑定您的手机号",
      user_sex:"",
      show: false,
      male1: require("../../../assets/images/userImg/male1.png"),
      male2: require("../../../assets/images/userImg/male2.png"),
      female1: require("../../../assets/images/userImg/female1.png"),
      female2: require("../../../assets/images/userImg/female2.png"),
      male:true,
    };
  },
  created() {
    this.username();
    this.userphone();
  },
  mounted() {
    let user_id = this.$route.params.userid;
    console.log(this.user_name);
  },
  methods: {
    aaa() {
      var that = this;
      that.show = true;
      console.log("!");
    },
    changeSex(){
       var that = this;
      that.male = !that.male;
    },
    returnSex(){
      var that = this;
      if( that.male) {
        that.user_sex = "男"
      }else{
        that.user_sex = "女"
      }
      this.hiddenShow();
    },
    hiddenShow: function() {
      var that = this;
      that.show = false;
    },
    username() {
      let user_name = this.$route.params.username;
      this.user_name = user_name || this.user_name;
    },
    userphone() {
      let user_phone = this.$route.params.userphone;
      this.user_phone = user_phone || this.user_phone;
    },
    linkToChangeName() {
      this.$router.push({
        name: "changeName"
      });
    },
    linkToChangePhone() {
      this.$router.push({
        name: "changePhone"
      });
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  }
};
</script>

<style>
.userBar {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgba(221, 221, 221, 1);
  padding-left: 15px;
  padding-right: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.userWord {
  font-size: 15px;
}
.exchangePhone,
.exchangeName,
.exchangeSex {
  height: 45px;
  line-height: 45px;
  display: inline-flex;
  align-items: center;
}
.showBar {
  width: 76%;
  height: 224px;
  margin-left: 12%;
  background: white;
}
.head {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  position: relative;
}
.icon {
  position: absolute;
  top: 10px;
  right: 0;
}
.body {
  padding: 0 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
