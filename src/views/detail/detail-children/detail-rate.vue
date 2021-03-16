<template>
  <div class="detail-rate">
    <el-row>
      <el-col :span="12">
        <div>用户评价</div>
      </el-col>
    </el-row>
    <el-row class="detail-rate-user">
      <el-col :span="24">
        <div v-if="detail_rate.user !== undefined">
          <img :src="detail_rate.user.avatar" alt="" />
          <span class="detail-rate-user-uname">{{
            detail_rate.user.uname
          }}</span>
        </div>
      </el-col>
      <el-col :span="24">
        <div>{{ detail_rate.content }}</div>
      </el-col>
      <el-col :span="24">
        <div class="detail-rate-created">
          <span class="detail_rate.time">{{
            detail_rate.created | created
          }}</span>
          <span class="detail-rate-style">{{ detail_rate.style }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  filters: {
    created(str) {
      const date = new Date(str * 1000);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let Hours = date.getHours();
      let Minutes = date.getMinutes();
      let Seconds = date.getSeconds();
      return `${y}-${m}-${d}   ${Hours}:${Minutes}:${Seconds}`;
    },
  },
  props: {
    detail_rate: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-rate {
  border-top: 5px solid #e4e7ed;
  margin-top: 15px;
  font-size: 15px;
  padding-bottom: 20px;
  border-bottom: 5px solid #e4e7ed;
}
.el-row:nth-of-type(1) {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid #dcdfe6;
  padding: 0 20px;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.detail-rate-user {
  margin-top: 20px;
  padding: 0 10px 0 15px;
  font-size: 13px;
}
.detail-rate-user-uname {
  font-size: 13px;
  position: relative;
  left: 10px;
  bottom: 23px;
  color: #f56c6c;
}
.detail-rate-created {
  padding-top: 15px;
  display: flex;
}
.detail-rate-created > span {
  flex: 1;
  color: #303133;
}
</style>
