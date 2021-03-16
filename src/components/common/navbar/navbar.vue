<template>
  <div class="navbar">
    <el-row>
      <el-col :span="6">
        <navbar-item path="/home" text="首页">
          <i slot="navbar-item-logo" class="el-icon-grape"></i>
        </navbar-item>
      </el-col>
      <el-col :span="6">
        <navbar-item path="/classify" text="分类">
          <i slot="navbar-item-logo" class="el-icon-watermelon"></i>
        </navbar-item>
      </el-col>
      <el-col :span="6">
        <navbar-item path="/shopcat" text="购物车">
          <i slot="navbar-item-logo" class="el-icon-cherry"></i>
        </navbar-item>
      </el-col>
      <el-col :span="6">
        <navbar-item path="/login" text="登录">
          <i slot="navbar-item-logo" class="el-icon-apple"></i>
        </navbar-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbarItem from "./navbar-item";
export default {
  components: {
    navbarItem,
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -1px 3px#DCDFE6;
  background-color: #fff;
}
.el-row {
  height: 49px;
}
.el-col {
  height: 100%;
}
</style>
