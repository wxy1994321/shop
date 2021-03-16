<template>
  <div class="detail-settlement">
    <el-row>
      <el-col :span="4"
        ><div>
          <i class="el-icon-headset"></i><br />
          <span>客服</span>
        </div>
      </el-col>
      <el-col :span="4"
        ><div>
          <i class="el-icon-date"></i><br />
          <span>店铺</span>
        </div>
      </el-col>
      <el-col :span="4"
        ><div>
          <i class="el-icon-star-on"></i><br />
          <span>收藏</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cart" @click="addcart">加入购物车</div>
      </el-col>
      <el-col :span="6">
        <div class="buy">购买</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    addcart(){
      this.$emit('addcart')
    }
  },
};
</script>

<style scoped>
.detail-settlement {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 58px;
  padding: 0 3px;
  background-color: #fff;
  border-top: 1px solid #e4e7ed;
}
i {
  font-size: 21px;
  margin-top: 8px;
}
.el-col {
  text-align: center;
}
span {
  font-size: 13px;
}
.cart,
.buy {
  height: 100%;
  line-height: 58px;
  border-radius: 2px;
  font-size: 13px;
  color: #fff;
}
.cart {
  background-color: #409eff;
}
.buy {
  background-color: #f56c6c;
}
.el-icon-headset{
    color: #f56c6c;
}
</style>
