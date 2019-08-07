// 商品卡片  上下分隔
// 参数@Params
//    @params data { Object }
// data具体参数
            @imgUrl { String }    商品封面地址
            @title  { String }    商品标题
            @desc   { String }    商品描述
            @price  { Number }    商品价格
// 配置参数
// @config
      @imgHeight { String }  图片高度，默认100px
  <template>
  <van-row class="card">
    <van-col span="24" class="card-img" :style="{ 'height':imgHeight }">
      <van-image :src="data.imgUrl" />
    </van-col>
    <van-col span="24">
      <van-row class="card-body">
        <van-col span="24" class="van-ellipsis">{{ data.title }}</van-col>
        <van-col
          span="24"
          class="van-ellipsis"
          style="font-size:6px;color:#969696;margin-bottom:4px;"
        >{{ data.desc }}</van-col>
        <van-col span="20" class="text-red text-bold">￥{{ data.price }}</van-col>
        <van-col span="4">
          <van-icon name="add-o" class="text-red" />
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "gy-commodity-card",
  props: {
    data: {
      type: Object,
      value: () => {
        return { imgUrl: "", title: "", desc: "", price: "" };
      }
    },
    imgHeight: {
      type: String,
      value: "100px"
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $base-bg-color;
  line-height: 1.4;
  border-radius: 6px;
  overflow: hidden;
  .card-img {
    height: 100px;
  }
  .card-body {
    padding: 6px 8px 2px;
    font-size: 14px;
  }
}
</style>
