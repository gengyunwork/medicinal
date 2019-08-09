<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="name"
          right-icon="clear"
          placeholder="请输入用户名"
          @click-right-icon="clear"
        />
      </van-cell-group>
    </div>
    <div class="saveChange" @click="saveChange">保存</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: "",
      name: ""
    };
  },
  mounted() {
    
  },
  methods: {
    clear() {
      this.name = "";
    },
    saveChange() {
      this.$router.push({
        name: "settings",
        params: { username: this.name }
        
      });
    //   console.log( this.name);
    }
  }
};
</script>

<style>
.van-field__right-icon {
  margin-right: 0;
}
.saveChange {
  width: 90%;
  margin-left: 5%;
  height: 41px;
  background: #ac0300;
  font-size: 15px;
  color: white;
  margin-top: 100px;
  line-height: 41px;
  text-align: center;
}
</style>
