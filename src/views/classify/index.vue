<template>
  <div class="classify">
    <!-- 顶部搜索条 -->
    <div class="sticky" style="top:0;z-index:99;">
      <van-search placeholder="请输入搜索关键词" v-model="searchString" shape="round" />
    </div>
    <!--  -->
    <van-row style="position:relative;">
      <van-col span="5">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in cardList" :key="item.id" :title="item.title" />
        </van-sidebar>
      </van-col>
      <van-col span="19" class="pl-s pr main" ref="main">
        <div v-for="(item,index) in cardList" :key="index" :id="'gy-tag-'+item.id">
          tag-{{item.id}}
          <img src="../../assets/01.png" style="max-height:126px;" />
          <van-row gutter="10">
            <van-col span="12" class="mb" v-for="(goods, index) in item.list" :key="index">
              <gy-commodity-card :data="goods" @card-click="toDetail"></gy-commodity-card>
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
import { IndexBar, IndexAnchor } from "vant";
import CommodityCard from "../../components/CommodityCard.vue";
import { debounce } from "../../assets/js/common";
export default {
  data() {
    return {
      activeKey: 0,
      searchString: "",
      cardList: [...new Array(5)]
    };
  },
  computed: {
    indexList() {
      return this.cardList.map((item, index) => index);
    }
  },
  watch: {
    activeKey(val) {
      let a = document.createElement("a");
      a.href = "#gy-tag-" + val;
      a.click();
    }
  },
  methods: {
    toDetail(data) {
      this.$router.push("/detail?id=" + data.id);
      console.log(data);
    }
  },
  created() {
    this.cardList = this.cardList.map((item, index) => {
      let t = new Array(4)
        .fill({
          id: 0,
          imgUrl: require("../../assets/images/medicinal.png"),
          title: "脑梗，血栓",
          desc: "七十味中药材就、+二十五味珍珠丸",
          price: 360
        })
        .map((item, i) => {
          item.id = i;
          return item;
        });
      return {
        id: index,
        title: "TAG-" + index,
        list: t
      };
    });
  },
  mounted() {
    let mainEle = this.$refs.main.$el,
      children = mainEle.children,
      _this = this;
    mainEle.onscroll = debounce(function() {
      for (let index = 0, len = children.length; index < len; index++) {
        let shouldChangeTag =
          children[index].getBoundingClientRect().top > 0 &&
          children[index].getBoundingClientRect().top < 150;
        if (shouldChangeTag) {
          _this.activeKey = index;
        }
      }
    }, 100);
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Search.name]: Search,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [CommodityCard.name]: CommodityCard
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 110px);
  overflow: auto;
  scroll-behavior: smooth;
}
</style>