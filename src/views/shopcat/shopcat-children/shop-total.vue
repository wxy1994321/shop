<template>
  <div class="shop-total">
    <el-row>
      <el-col :span="8">
        <div class="shop-total-allcheckbox">
          <el-checkbox class="checkbox" :value="checked" @change="selectall"
            >全选</el-checkbox
          >
        </div>
      </el-col>
      <el-col :span="8">
        <div class="allprice">合计：{{ total_price }}</div>
      </el-col>
      <el-col :span="8">
        <div class="calculation">
          <el-button type="danger" class="calculation-btn" @click="btn_click"
            >去计算</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    selectall(value) {
      this.$store.commit("selectall", value);
    },
    btn_click() {
      this.$emit('btn_click')
    },
  },
  computed: {
    checked() {
      return this.$store.getters.checkall;
    },
    total_price() {
      return this.$store.getters.total;
    },
  },
};
</script>

<style scoped>
.shop-total {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #67C23A;
  font-size: 13px;
}
.shop-total-allcheckbox,
.allprice,
.calculation {
  position: relative;
  height: 40px;
}
.checkbox {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 10px;
  color: #fff;
}
.allprice {
  line-height: 40px;
  color: #fff;
  font-weight: 600;
}
.calculation-btn {
  position: absolute;
  right: 0;
}
</style>
