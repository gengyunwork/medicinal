<template>
  <div>
    <!-- 顶部用户信息卡片 -->
    <div class="Head">
      <div class="headImg">
        <img :src="userImg" alt />
      </div>
      <div style="float:left; margin-left: 15px; margin-top:5px;">
        <div class="headName">
          <van-divider style="color:#FFF;margin:8px 0;">{{ userName }}</van-divider>
        </div>
        <small>可提取金额(元) &nbsp;380.00</small>
      </div>
    </div>
    <!-- 提现表单 -->
    <h4 style="padding-left:16px;">提现金额（元）</h4>
    <van-cell-group>
      <van-field v-model="cashWithdrawa" center clearable placeholder="请输入提现金额" type="number">
        <span slot="label" style="font-size:22px;">￥</span>
        <span slot="button" class="text-red">全部提现</span>
      </van-field>
    </van-cell-group>
    <div style="padding-left:14px;padding-top:14px;font-size:12px;color:#969696;">温馨提示，佣金满100元才可提现</div>
    <van-cell value="提现至" is-link>
      <template slot="title">
        <van-image
          width="18"
          height="18"
          style="vertical-align:middle; margin-right:12px;"
          :src="require('../../../assets/images/distribute/wechat.png')"
        />
        <span>微信</span>
      </template>
    </van-cell>
    <div class="bg-grey p-l text-center">
      <div class="applyBtn" :class="{'confirm':cashWithdrawa}" @click="confirm">申请提现</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../../assets/images/userImg/userImg.png"),
      userName: "章鱼哥",
      cashWithdrawa: ""
    };
  },
  methods: {
    confirm() {
      if (this.cashWithdrawa) {
        this.$router.push("/withdrawsuccess");
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
  padding: 20px;
  color: #fff;
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

.applyBtn {
  width: 80%;
  margin: 40px auto;
  padding: 10px 0;
  background: #aaa;
  &.confirm {
    background: $base-red;
    color: #fff;
  }
}
</style>

