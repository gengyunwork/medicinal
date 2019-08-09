// 提现成功
<template>
  <div>
    <div class="message-card bg-white">
      <van-icon name="passed" class="text-red" style="font-size:88px;" />
      <h3>提现成功</h3>
      <small>我们将在三个工作日内处理您的提现</small>
      <van-divider />
      <van-cell style="text-align:left;" title="提现金额" value="5000.00元" />
    </div>
    <router-link class="to-home" to="/home" replace>完成</router-link>
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
.message-card {
  padding: 20px 0 10px;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 16%;
  right: 16%;
}
.to-home {
  position: absolute;
  left: 10%;
  right: 10%;
  top: 60%;
  padding: 12px;
  background-color: $base-red;
  color: #fff;
  text-align: center;
}
</style>
