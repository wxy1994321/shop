<template>
  <div class="home-recommend">
    <el-row>
      <el-col :span="6" v-for="item in recommend">
        <div class="home-recommend-div">
          <a :href="item.link">
            <img :src="item.image" alt="" />
            <br />
            <span>{{ item.title }}</span>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommend {
  padding: 15px 0;
  border-bottom: 8px solid #dcdfe6;
}
.home-recommend-div {
  text-align: center;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #409eff;
}
img {
  width: 75px;
  height: 75px;
}
span {
  position: relative;
  top: 4px;
}
</style>
