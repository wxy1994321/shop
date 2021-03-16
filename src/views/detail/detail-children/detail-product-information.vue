<template>
  <div class="detail-product-information">
    <el-row>
      <el-col :span="24" class="detail-goods-title">
        <div>{{ detail_goods.title }}</div>
      </el-col>
      <el-col :span="24" class="detail-goods-price">
        <div>￥{{ detail_goods.realprice }}</div>
        <div>{{ detail_goods.oldprice }}</div>
        <div>{{ detail_goods.discount }}</div>
      </el-col>
      <el-col :span="24" class="detail-goods-columns">
        <div v-for="item in detail_goods.columns">{{ item }}</div>
      </el-col>
      <el-col :span="24" class="detail-goods-services">
        <div v-for="item in detail_goods.services">
          <img :src="item.icon" alt="" />
          <span>{{ item.name | string_interception }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    detail_goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    string_interception(str) {
      if (str.length > 4) {
        return str.slice(0, 6);
      } else {
        return str;
      }
    },
  },
};
</script>

<style scoped>
.el-col {
  padding: 0 3px;
}
.detail-product-information {
  padding: 15px 0;
  border-bottom: 5px solid#EBEEF5;
}
.detail-goods-title {
  font-size: 13px;
}
.detail-goods-price {
  margin-top: 20px;
  height: 25px;
  line-height: 25px;
}
.detail-goods-price > div {
  float: left;
}
.detail-goods-price > div:first-of-type {
  font-size: 20px;
  color: #409eff;
}
.detail-goods-price > div:nth-of-type(2) {
  font-size: 15px;
  color: #909399;
  margin-left: 10px;
  text-decoration: line-through;
}
.detail-goods-price > div:nth-of-type(3) {
  margin-left: 10px;
  font-size: 12px;
  background-color: #409eff;
  color: #fff;
  border-radius: 30px;
  padding: 0 5px;
  font-weight: 600;
}
.detail-goods-columns {
  margin-top: 10px;
  display: flex;
  height: 35px;
  line-height: 35px;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}
.detail-goods-columns > div {
  flex: 1;
  font-size: 12px;
  color: #606266;
}
.detail-goods-columns > div:nth-of-type(2) {
  text-align: center;
}
.detail-goods-columns > div:nth-of-type(3) {
  text-align: right;
}
.detail-goods-services {
  display: flex;
}
.detail-goods-services > div {
  flex: 1;
  margin-top: 10px;
}
.detail-goods-services {
  font-size: 11px;
  text-align: center;
}
img {
  width: 10px;
  height: 10px;
  position: relative;
  right: 3px;
}
</style>
