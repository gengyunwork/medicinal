<template>
  <div>
    <div style=" padding: 0px 15px;">
      <input v-model="moblie" class="inputNum" type="number" value placeholder="请输入手机号" />
    </div>
    <div class="info">
      <input v-model="code" class="code" type="number" value placeholder="验证码" :disabled="disabled" />
      <div
        class="codetxt"
        type="button"
        :disabled="disabled"
        @click="sendcode"
        v-if="moblie == ''"
      >{{btntxt}}</div>
      <div
        class="codetxt"
        :disabled="disabled"
        @click="sendcode"
        v-else
        style="color:#AC0300;border:1px solid rgba(172,3,0,1);"
      >{{btntxt}}</div>
    </div>

    <div class="btn" @click="sendMessage" v-if="code==''||moblie==''">完成</div>
    <div class="btn" @click="sendMessage" v-else style="background:#AC0300;color:#FFFFFF">完成</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moblie: "",
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0
    };
  },
  created() {},
  methods: {
    sendcode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.moblie == "") {
        this.$toast("手机号不能为空");
      } else if (!reg.test(this.moblie)) {
        this.$toast("手机号格式不正确");
      } else {
        // this.time = 60;
        this.disabled = true;
      }
    },
    sendMessage() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.moblie == "") {
        this.$toast("手机号不能为空");
      } else if (!reg.test(this.moblie)) {
        this.$toast("手机号格式不正确");
      } else {
        // this.time = 60;
        this.disabled = true;
        console.log(this.moblie);
        this.$router.push({
          name: "settings",
          params: { userphone: this.moblie }
        });
      }
    }
  }
};
</script>

<style>
input {
  display: block;
  border: none;
  width: 100%;
  height: 45px;
  background: white;
  border-bottom: 1px solid #dddddd;
}
.info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0px 15px;
}
.codetxt {
  width: 78px;
  height: 23px;
  border: 1px solid rgba(221, 221, 221, 1);
  font-size: 12px;
  color: #666;
  line-height: 23px;
}
.btn {
  width: 92%;
  height: 40px;
  margin-left: 4%;
  margin-top: 80px;
  background: rgba(221, 221, 221, 1);
  line-height: 40px;
  text-align: center;
}
</style>
