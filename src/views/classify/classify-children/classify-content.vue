<template>
  <div class="classify-content">
    <el-row>
      <el-col :span="8" v-for="(item, index) in subcategories.list">
        <div class="item" :key="index">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="" @load="imgload" />
            <div class="item-text">{{ item.title }}</div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
.item {
  text-align: center;
  font-size: 12px;
  padding: 3px 0;
}

.item-img {
  width: 70%;
}

.item-text {
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: #409eff;
}
</style>
