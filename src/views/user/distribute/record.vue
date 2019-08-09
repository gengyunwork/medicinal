// 提现记录
<template>
  <div>
    <!-- 顶部选项卡 -->
    <van-tabs style="box-shadow:0 1px 2px 2px rgba(0,0,0,.2);" @change="tabChange">
      <van-tab title="全部提现"></van-tab>
      <van-tab title="提现中"></van-tab>
      <van-tab title="已提现"></van-tab>
    </van-tabs>
    <!-- 内容 -->
    <div class="pt">
      <div class="record-card" v-for="record in tempList" :key="record.id">
        <div class="card-content">
          <span class="text-red" style="font-size:18px;">{{record.amountMoney}}</span>
          <template>
            <van-tag color="#ac0300" v-show="record.state == 0">已到账</van-tag>
            <van-tag color="#CD8116" v-show="record.state == 1">提现中</van-tag>
          </template>
        </div>
        <div class="card-content">
          <span>提现金额</span>
          <span style="color:#999;">{{record.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from "vant";
export default {
  data() {
    return {
      recordList: [
        {
          id: 0,
          state: 0,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        },
        {
          id: 1,
          state: 1,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        },
        {
          id: 2,
          state: 0,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        },
        {
          id: 3,
          state: 1,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        },
        {
          id: 4,
          state: 0,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        },
        {
          id: 5,
          state: 1,
          amountMoney: 5000,
          date: "2019-05-06 15:46"
        }
      ],
      tempList:[]
    };
  },
  methods: {
    tabChange(index) {
      switch (index) {
        case 0:
          break;
        case 1:
          this.tempList = this.recordList.filter(item => item.state == 1);
          break;
        case 2:
          this.tempList = this.recordList.filter(item => item.state == 0);
          break;
      }
    }
  },
  created(){
      this.tempList = this.recordList.concat();
  },
  components: {
    [Tag.name]: Tag
  }
};
</script>
<style lang="scss" scoped>
.record-card {
  border-top: 12px solid $base-bg-color;
  padding: 12px;
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child {
      margin-bottom: 6px;
    }
  }
}
</style>
