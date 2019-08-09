
<template>
  <div>
    <van-tabs animated>
      <van-tab v-for="(item) in myTeamList" :title="item.id +'级团队'" :key="item.id">
        <div v-if="item.id == 1">
          <div v-if="item.teamList.length == 0">
            <van-divider
              :style="{ color: '#999999', borderColor: '#999999', padding: '177px 76px' }"
            >
              <span style="color:#333333">暂无成员</span>
            </van-divider>
          </div>
          <div v-else>
            <div v-for="(value , index) in item.teamList" :key="index">
              <div class="teamBar">
                <div class="teamImg">
                  <img :src="value.icon" alt />
                </div>
                <div class="teamOthers">
                  <div class="teamName">{{value.name}}</div>
                  <div class="teamNum">推广人数1：{{value.num}}人</div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top:40px;text-align:center;font-size:12px;width:100%;padding-bottom:19px;">{{item.teamList.length}}位一级团员</div>
        </div>

        
        <div v-if="item.id == 2">
          <div v-if="item.teamList.length == 0">
            <van-divider
              :style="{ color: '#999999', borderColor: '#999999', padding: '177px 76px' }"
            >
              <span style="color:#333333">暂无成员</span>
            </van-divider>
          </div>
          <div v-else>
            <div v-for="(value , index) in item.teamList" :key="index">
              <div class="teamBar">
                <div class="teamImg">
                  <img :src="value.icon" alt />
                </div>
                <div class="teamOthers">
                  <div >
                    <div class="teamName">{{value.name}}</div>
                    <div class="teamNum">推广人数1：{{value.num}}人</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top:40px;text-align:center;font-size:12px;width:100%;padding-bottom:19px;">{{item.teamList.length}}}位二级团员</div>
        </div>
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myTeamList: [
        {
          id: 1,
          teamList: [
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强1",
              num: "5"
            },
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强1",
              num: "5"
            },
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强1",
              num: "5"
            }
          ]
        },
        {
          id: 2,
          teamList: [
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强1111111",
              num: "5"
            },
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强2",
              num: "5"
            },
            {
              icon: require("../../../assets/images/userImg/userImg.png"),
              name: "王建强2",
              num: "5"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.van-tabs__nav--line {
  height: 46px;
}
.van-tab {
  font-size: 15px;
  color: #333333;
}
.van-tab--active {
  color: #ac0300;
}
.van-tabs__line {
  background: #ac0300;
}
.teamBar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  height: 70px;
  line-height: 70px;
  padding: 10px 15px;
}
.teamImg {
  width: 50px;
  height: auto;
}
.teamOthers {
  border-bottom: 1px solid #dddddd;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  font-size: 16px;
}
.teamName {
  float: left;
}
.teamNum {
  margin-left: 50px;
  color:#666666;
  font-size:14px;
  float: right;
}
</style>
