// 分销中心
<template>
  <div>
    <!-- 卡片展示 -->
    <van-row class="p-l" style="color:#FFF;" gutter="8">
      <van-col class="dist-card" span="12">
        <div>
          <div>我的佣金（元）</div>
          <div>{{ pageData.brokerage }}</div>
        </div>
      </van-col>
      <van-col class="dist-card" span="12">
        <div>
          <div>佣金金额（元）</div>
          <div>500.00</div>
          <div>(冻结金额：{{ pageData.freezen }}元)</div>
        </div>
      </van-col>
      <van-col class="dist-card" span="12">
        <div>
          <div>我的业绩单（元）</div>
          <div>{{ pageData.orderNum }}</div>
        </div>
      </van-col>
      <van-col class="dist-card" span="12">
        <div>
          <div>我的团队（元）</div>
          <div>{{ pageData.menberNum }}</div>
        </div>
      </van-col>
    </van-row>
    <!-- 提现  提现记录 -->
    <van-cell :value="'可提金额：' + ( pageData.brokerage - pageData.freezen ) + '元'" is-link to="/withdraw">
      <template slot="title">
        <i class="cell-icon cell-1" slot="icon"></i>
        <span>提现</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template slot="title">
        <i class="cell-icon cell-2" slot="icon"></i>
        <span>提现记录</span>
      </template>
    </van-cell>
    <div style="padding-top:20px;background:#f5f5f5;"></div>
    <!-- 我的团队 邀请分销 分销说明 -->
    <van-cell is-link to="myTeam">
      <template slot="title">
        <i class="cell-icon cell-team" slot="icon"></i>
        <span>我的团队</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template slot="title">
        <i class="cell-icon cell-invite" slot="icon"></i>
        <span>邀请分销成员</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template slot="title">
        <i class="cell-icon cell-illustration" slot="icon"></i>
        <span>分销说明</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pageData:{}
        }
    },
    mounted(){
        this.pageData = {
            brokerage:500,
            freezen:130,
            menberNum:50,
            orderNum:50
        }
    }
};
</script>

<style lang="scss" scoped>
@each $i in 1, 2, 3, 4 {
  #{".dist-card:nth-of-type(" + $i + ")" + " > div"} {
    $url: "~@/assets/images/distribute/bg (" + #{$i} + ").png";
    background-image: url($url);
  }
}

.dist-card > div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.5;
  height: 98px;
  margin-bottom: 8px;
  background: {
    position: top left;
    repeat: no-repeat;
    size: 100% 100%;
  }
}

.cell-icon {
  display: inline-block;
  height: 18px;
  width: 18px;
  margin-top: 3px;
  margin-right: 12px;
  vertical-align: middle;
  background: {
    position: top left;
    size: 100% 100%;
    repeat: no-repeat;
  }
}

.cell-1 {
  background-image: url(~@/assets/images/distribute/money01.png);
}

.cell-2 {
  background-image: url(~@/assets/images/distribute/money02.png);
}

.cell-team{
    background-image: url(~@/assets/images/distribute/team.png);
}

.cell-invite{
    background-image: url(~@/assets/images/distribute/invite.png);
}

.cell-illustration{
    background-image: url(~@/assets/images/distribute/illustration.png);
}
</style>
