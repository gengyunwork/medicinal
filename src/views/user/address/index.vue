<template>
  <div>
    <!-- 没有地址信息时 -->
    <div class="text-center bg-grey p" style="margin-top:200px;" v-show="addressList.length==0">
      <img src="../../../assets/images/location.png" style="width:60%" alt />
      <p>您还没有设置地址</p>
      <span
      @click="$router.push('/addressform')"
        style="display:inline-block;border-radius:6px;border:2px solid #ac0300;padding:4px 18px;"
      >去设置</span>
    </div>
    <!-- 地址列表 -->
    <div class="address-card" v-for="address in addressList" :key="address.id">
      <div style="padding:0 12px;">
        <span class="name">{{ address.name }}</span>
        <span class="mobile">{{ address.mobile }}</span>
      </div>
      <div class="address">{{ address.address }}</div>
      <div class="toolbar">
        <div @click="changeDefault(address)">
          <van-icon v-show="!address.isDefault" class="i" name="circle" />
          <van-icon v-show="address.isDefault" name="checked" class="i" color="#ac0300"></van-icon>默认地址
        </div>
        <div style="color:#666;">
          <van-icon class="i" name="edit" @click="editAddress(address.id)" />编辑&nbsp;&nbsp;&nbsp;&nbsp;
          <van-icon class="i" name="delete" @click="deleteAddress(address.id)" />删除
        </div>
      </div>
    </div>
    <router-link to="/addressform" class="bottomBtn">
      <van-icon name="add-o" style="vertical-align:middle;font-size:18px;"></van-icon>&nbsp;&nbsp;&nbsp;新增收货地址
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addressList: [
        // {
        //   id: 0,
        //   name: "李若云",
        //   mobile: "13695487569",
        //   address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
        //   isDefault: true
        // },
        // {
        //   id: 1,
        //   name: "李若云",
        //   mobile: "13695487569",
        //   address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
        //   isDefault: false
        // },
        // {
        //   id: 2,
        //   name: "李若云",
        //   mobile: "13695487569",
        //   address: "黑龙江省哈尔滨市南岗区什哈合作孵化器",
        //   isDefault: false
        // }
      ]
    };
  },
  methods: {
    editAddress(id) {
      console.log(id);
      this.$router.push({ name: "addressform", query: { id } });
    },
    deleteAddress(id) {
      console.log(id);
    },
    changeDefault(address) {
      if (address.isDefault) {
        return;
      }
      // 请求接口，修改默认地址
    }
  }
};
</script>

<style lang="scss" scoped>
.address-card {
  padding-top: 12px;
  line-height: 1.3;
  .name {
    margin-right: 1.5rem;
  }
  > .address {
    color: #666;
    padding: 8px 12px;
    font-size: 14px;
    border-bottom: 1px solid #e3e3e3;
  }
  > .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12px;
    .i {
      color: #000;
      margin-right: 6px;
      font-size: 16px;
      vertical-align: middle;
    }
  }
}
.bottomBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 0;
  text-align: center;
  background: white;
}
</style>
