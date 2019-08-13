<template>
  <div>
    <van-field v-model="name" label="收货人：" placeholder="请输入用户名" right-icon="arrow" />
    <van-field
      v-model="mobile"
      label="手机号码："
      type="number"
      placeholder="请输入手机号"
      right-icon="arrow"
    />
    <van-cell title="所在地区" is-link value @click="show = true" />
    <van-field v-model="addressDetail" type="textarea" placeholder="请填写街道，门牌号等" rows="5" autosize />
    <div class="p-l bg-grey">
      <van-button :block="true" type="primary" class="bg-red" style="border:0;" @click="submit">保存</van-button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirm" @cancel="onCancel" value="230103" />
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
import { Area } from "vant";
import areaList from "./regionData.js";
export default {
  data() {
    return {
      name: "",
      mobile: "",
      show: false,
      addressDetail: "",
      region: "",
      areaList
    };
  },
  methods: {
    onConfirm(value) {
      this.region = value.map(item => item.name).join("-");
      this.onCancel();
    },
    onCancel() {
      this.show = false;
    },
    submit() {
      console.log({
        name: this.name,
        mobile: this.mobile,
        region: this.region,
        addressDetail: this.addressDetail
      });
    }
  },
  components: {
    [Popup.name]: Popup,
    [Area.name]: Area
  }
};
</script>
