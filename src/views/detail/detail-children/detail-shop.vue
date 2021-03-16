<template>
  <div class="detail-shop">
    <el-row>
      <el-col :span="24">
        <img :src="detail_shop.logo" alt="" />
        <span class="detail-shop-name">{{ detail_shop.name }}</span>
      </el-col>
    </el-row>
    <el-row class="detail-shop-two">
      <el-col :span="12">
        <div class="detail-shop-left">
          <div>
            <div class="detail-shop-sells">
              {{ detail_shop.sells | conversion }}
            </div>
            <div>
              总销量
            </div>
          </div>
          <div>
            <div class="detail-shop-fans">
              {{ detail_shop.fans | conversion }}
            </div>
            <div>
              全部宝贝
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="detail-shop-right">
          <div v-for="item in detail_shop.score" class="detail-shop-right-div">
            <div>{{ item.name }}</div>
            <div>{{ item.score.toFixed(1) }}</div>
            <div :style="{ color: item.isBetter ? 'green' : 'red' }">
              {{ item.isBetter ? "高" : "低" }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="detail-shop-row-btn">
      <el-col :span="12" :offset="6" class="detail-shop-btn">
        <el-button type="primary" round class="el-icon-star-off"> 进店逛逛</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    detail_shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    conversion(value) {
      if (value > 10000) {
        return (value / 10000).toFixed(1) + "万";
      }
      return value;
    },
  },
};
</script>
<style scoped>
.detail-shop {
  width: 100%;
  padding-top: 20px;
  font-size: 13px;
}
.el-row {
  padding: 0 3px;
}
img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #dcdfe6;
  position: relative;
  left: 10px;
}
.detail-shop-name {
  position: relative;
  left: 18px;
  bottom: 20px;
  font-size: 14px;
  color: #606266;
}
.detail-shop-left {
  display: flex;
  border-right: 1px solid #e4e7ed;
}
.detail-shop-left > div {
  flex: 1;
  text-align: center;
}
.detail-shop-two {
  padding-top: 15px;
}
.detail-shop-sells,
.detail-shop-fans {
  padding-bottom: 5px;
  font-size: 15px;
}
.detail-shop-right-div {
  display: flex;
  position: relative;
  bottom: 15px;
}
.detail-shop-right-div > div {
  text-align: center;
  padding: 3px 0;
}
.detail-shop-right-div > div:nth-of-type(1) {
  flex: 2;
}
.detail-shop-right-div > div:nth-of-type(2) {
  flex: 1;
}
.detail-shop-right-div > div:nth-of-type(3) {
  flex: 1;
}
.detail-shop-btn {
  text-align: center;
}
.detail-shop-row-btn{
  padding: 10px 0 30px;
  border-bottom: 5px solid #E4E7ED;
}
</style>
