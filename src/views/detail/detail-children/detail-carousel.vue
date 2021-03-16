<template>
  <div class="detail-carousel">
    <el-carousel trigger="click" height="400px" indicator-position="none">
      <el-carousel-item v-for="item in detail_topImages" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    detail_topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

</style>
