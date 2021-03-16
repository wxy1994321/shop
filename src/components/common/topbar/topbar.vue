<template>
  <div class="topbar">
    <el-row>
      <el-col :span="4">
        <div class="topbar-left"><slot name="left"></slot></div>
      </el-col>
      <el-col :span="16">
        <div class="topbar-center"><slot name="center"></slot></div>
      </el-col>
      <el-col :span="4">
        <div class="topbar-right"><slot name="right"></slot></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar {
  height: 44px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  line-height: 44px;
  z-index: 99;
  box-shadow: 0 1px 1px #dcdfe6;
}
.el-row,
.el-col {
  height: 100%;
}
.topbar-center,
.topbar-left {
  text-align: center;
}
.topbar-left {
  font-size: 18px;
  color: #409eff;
}
</style>
