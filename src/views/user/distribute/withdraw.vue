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

    <div class="text-center bg-grey" style="padding-top:80px;" v-if="fasle">
      <img
        style="width:auto;height:48px;transform:translateY(65%);"
        src="../../../assets/images/distribute/file.png"
        alt
        srcset
      />
      <div style="height:1px;width:70%;background:#ccc;margin-left:15%;"></div>
      <br />
      <br />
      <br />
      <div style="color:#999;">目前尚无佣金</div>
      <div>
        <span class="inviteBtn">邀请好友赚钱</span>
      </div>
    </div>
    <div v-else>
      <div style="border-top:12px solid #f5f5f5;" v-for="item in 4" :key="item">
        <van-cell style="padding:4px 12px;">
          <template slot="title">
            <van-divider style="margin:0;width:60%;color:#333;">李若云</van-divider>
          </template>
          <template>
            <span class="text-red" v-show="item%2">待消费</span>
            <span class="text-grey" v-show="item%2==0">已消费</span>
          </template>
        </van-cell>

        <van-cell :title-style="{'flex':2}">
          <template slot="title">
            <div class="custom-title text-small">报名时间：2019-04-03</div>
            <div class="custom-title text-small">报名时间：2019-04-03至2019-12-12</div>
          </template>
          <template>
            <span class="text-small">佣金金额：35.00</span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brokerageData: {
        total: 5000,
        freezen: 1900
      }
    };
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

