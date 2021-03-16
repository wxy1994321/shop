<template>
  <div class="detail-param-info">
    <el-table :data="detail_param_info.info" stripe style="width: 100%" border>
      <el-table-column prop="key" label="参数"></el-table-column>
      <el-table-column prop="value" label="详情"></el-table-column>
    </el-table>
    <div v-for="item in detail_param_info.sizes" class="detail-param-info-size">
      <el-table :data="item" stripe style="width: 100%" border>
        <el-table-column prop="0" label="参数"></el-table-column>
        <el-table-column prop="1" label="详情"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail_param_info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detail-param-info {
  font-size: 13px;
  padding: 0px 3px 0;
}
.detail-param-info-size {
  border-top: 2px solid #dcdfe6;
}
</style>
