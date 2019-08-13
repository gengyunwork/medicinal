// 评论卡片组件
<template>
  <div class="recommend-card">
    <div class="header">
      <div>
        <van-image
          style="vertical-align:middle;"
          round
          width="2.5rem"
          height="2.5rem"
          :src="commentData.avatar"
        />
        <span class="ml">{{commentData.username}}</span>
      </div>
      <span>{{commentData.date}}</span>
    </div>
    <div class="content">{{commentData.content}}</div>
    <div class="images">
      <van-image v-for="(img, index) in commentData.imageList" :key="index" class="mr" width="5rem" height="5rem" :src="img" />
    </div>
    <div class="footer">
      <span>{{commentData.commodity}}</span>
      <div>
        <van-icon class="mr-s" style="vertical-align:middle;" name="thumb-circle-o"></van-icon>{{commentData.favorite}}
        <van-icon class="mr-s ml" style="vertical-align:middle;" name="chat-o"></van-icon>{{commentData.comment}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    commentData: Object,
    value: () => {
      return {};
    }
  },
  name: "gy-recommend"
};
</script>

<style lang="scss">
.recommend-card {
  padding: 10px 22px;
}
.recommend-card > {
  .header,
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .content {
    line-height: 1.4;
    padding-bottom: 12px;
    text-indent: 2rem;
    font-size: 13px;
  }
}
</style>

