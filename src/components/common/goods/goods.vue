<template>
  <div class="goods">
    <el-row>
      <goods-item
        class="goods-item"
        v-for="item in goods"
        :goodsItem="item"
        @imgload="imgload"
        :key="Math.random()"
      >
      </goods-item>
    </el-row>
  </div>
</template>

<script>
import goodsItem from "./goods-item";
export default {
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
  components: {
    goodsItem,
  },
  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
.goods-item {
  margin-bottom: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-bottom: 5px;
}
</style>
