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
        <span style="font-size:10px;color:#999;">请绑定您的手机号</span>
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
    <div class="userBar">
      <span class="userWord">性别</span>
      <div class="exchangeSex">
        <span style="font-size:10px;color:#999;">女</span>
        <van-icon name="arrow" size="16" color="#999999" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../../assets/images/userImg/userImg.png"),
      user_name: "王建强"
    };
  },
  created(){
      this.username()
  },
  mounted() {
    let user_id = this.$route.params.userid;
    
   
    console.log(this.user_name);
  },
  methods: {
      username(){
           this.user_name = this.$route.params.username;
      },
    linkToChangeName() {
      this.$router.push({
        name: "changeName"
      });
    },
    linkToChangePhone(){
        this.$router.push({
        name: "changePhone"
      });
    }
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
</style>
