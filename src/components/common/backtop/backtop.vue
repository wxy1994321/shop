<template>
  <div class="backtop">
    <i class="el-icon-top"></i>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.backtop {
  position: fixed;
  bottom: 70px;
  right: 20px;
  border-radius: 50%;
  background-color: #409eff;
  width: 35px;
  height: 35px;
}
i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #fff;
}
</style>
