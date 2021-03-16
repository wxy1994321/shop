<template>
  <div class="home-popular">
    <el-row>
      <el-col :span="24">
        <div>
          <h5 class="home-popular-title">本周流行</h5>
          <div class="home-popular-picture">
            <a href="https://act.mogujie.com/zzlx67">
              <img src="~assets/01.png" alt="" />
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-popular{
  border-bottom: 1px solid #DCDFE6;
}
.home-popular-title{
    text-align: center;
    margin-top: 7px;
    margin-bottom: 7px;
    color: #303133;
}
img{
    width: 100%;
    height: 100%;
}
</style>
