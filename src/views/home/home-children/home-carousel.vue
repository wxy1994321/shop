<template>
  <div class="home-carousel">
    <el-carousel height="210px" :interval="2000" arrow="never">
      <el-carousel-item v-for="item in banner" :key="Math.random()">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="home_carousel_imgload" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    home_carousel_imgload() {
      
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
