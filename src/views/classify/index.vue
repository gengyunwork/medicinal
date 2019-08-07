<template>
  <div class="classify">
    <div class="sticky" style="top:0;z-index:99;">
      <van-search placeholder="请输入搜索关键词" v-model="searchString" shape="round" />
    </div>
    <van-row>
      <van-col span="5">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>
      <van-col span="19" class="pl-s pr main">
          <div class="pb">
            <img src="../../assets/01.png" style="max-height:126px;" />
            <van-row gutter="10">
              <van-col span="12" class="mb" v-for="(item, index) in cardList" :key="index">
                <gy-commodity-card :data="item"></gy-commodity-card>
              </van-col>
            </van-row>
          </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from "vant";
import { Search } from "vant";
import CommodityCard from "../../components/CommodityCard.vue";
export default {
  data() {
    return {
      activeKey: 0,
      searchString: "",
      cardList: [
        ...new Array(25).fill({
          imgUrl: require("../../assets/images/medicinal.png"),
          title: "脑梗，血栓",
          desc: "七十味中药材就、+二十五味珍珠丸",
          price: 360
        })
      ]
    };
  },
  methods: {},
  mounted() {},
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Search.name]: Search,
    [CommodityCard.name]: CommodityCard
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 110px);
  overflow: auto;
}
</style>

