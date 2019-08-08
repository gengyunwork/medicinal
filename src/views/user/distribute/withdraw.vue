// 提现页面
<template>
  <div>
    <div class="top-pane">
      <div>总佣金（元）</div>
      <div style="font-size:20px;margin-top:24px;">00.00</div>
      <span class="withdraw">提现</span>
    </div>
    <van-row style="padding:12px;" gutter="10">
      <van-col span="12">
        <span>可用佣金（元）</span>
        <span class="text-red">0.00</span>
      </van-col>
      <van-col span="12" style="text-align:right;">
        <span>冻结佣金（元）</span>
        <span class="text-red">0.00</span>
      </van-col>
    </van-row>

    <div class="text-center bg-grey" style="padding-top:80px;">
      
      <img
        style="width:auto;height:48px;transform:translateY(65%);"
        src="../../../assets/images/distribute/file.png"
        alt
        srcset
      />
      <div style="height:1px;width:70%;background:#ccc;margin-left:15%;"></div>
      <br>
      <br>
      <br>
      <div style="color:#999;">目前尚无佣金</div>
      <div>
        <span class="inviteBtn">邀请好友赚钱</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.top-pane {
  background: $base-red;
  text-align: center;
  color: white;
  padding: {
    top: 36px;
    bottom: 36px;
  }
  > .withdraw {
    display: inline-block;
    padding: 2px 18px;
    border: 1px solid #fff;
    border-radius: 6px;
    margin-top: 16px;
  }
}
.text-red {
  color: $base-red;
}

.inviteBtn {
  display: inline-block;
  padding: 2px 18px;
  border: 1px solid $base-red;
  border-radius: 6px;
  margin-top: 16px;
  color: $base-red;
}
</style>

