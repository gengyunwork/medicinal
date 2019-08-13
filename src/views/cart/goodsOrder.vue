<template>
  <div>
    <gy-goods-card :data="goods"></gy-goods-card>
  </div>
</template>

<script>
import goodsCard from "../../components/goodsCard.vue";
export default {
  data() {
    return {};
  },
   components: {
    [goodsCard.name]: goodsCard
  }
};
</script>

<style lang="scss" scoped>
</style>

