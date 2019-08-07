<template>
  <div class="classify">
    <van-search placeholder="请输入搜索关键词" v-model="searchString" shape="round" />
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>
      <van-col  span="18" class="pl-s pr">
          <img src="../../assets/01.png"  style="max-height:126px;">
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from "vant";
import { Search } from "vant";
export default {
  data() {
    return { activeKey: 0, searchString: "" };
  },
  methods: {},
  mounted() {},
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Search.name]: Search
  }
};
</script>

<style lang="scss" scoped>
</style>

