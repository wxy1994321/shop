<template>
  <div class="home-navigation">
    <el-row>
      <el-col :span="8" v-for="(item, index) in navigation_title">
        <div @click="navigation_click(index)">
          <span :class="{ 'border-bottom': index == i }">{{ item }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
    };
  },
  props: {
    navigation_title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    navigation_click(index) {
      this.i = index;
      this.$emit("navigation_click", index);
    },
  },
};
</script>

<style scoped>
.home-navigation {
  padding: 8px 0;
}
.el-col {
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  height: 25px;
  line-height: 25px;
}
.border-bottom {
  border-bottom: 2px solid #409eff;
}
span {
  display: inline-block;
  padding: 0 3px;
}
</style>
