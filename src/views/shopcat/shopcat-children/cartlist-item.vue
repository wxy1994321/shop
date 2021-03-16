<template>
  <div class="cartlist-item">
    <el-row>
      <el-col :span="2">
        <div class="cartlist-item-checkbox">
          <el-checkbox
            class="checkbox"
            v-model="item.checked"
            @change="item_checked"
          ></el-checkbox>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="cartlist-item-img">
          <img :src="item.image" alt="" />
        </div>
      </el-col>
      <el-col :span="15">
        <div class="cartlist-item-info">
          <div class="cartlist-item-title">{{ item.title }}</div>
          <div class="cartlist-item-desc">{{ item.desc }}</div>
          <div class="cartlist-item-price">
            <span class="realprice"> ￥ {{ item.realprice }}</span>
            <span class="number"> X {{ item.count }}</span>
          </div>
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
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
    },
  },
  methods: {
    item_checked(value) {
      const obj = { value, index: this.index };
      this.$store.commit("item_checked", obj);
    },
  },
};
</script>

<style scoped>
.cartlist-item {
  border-bottom: 1px solid #dcdfe6;
}
.cartlist-item-checkbox,
.cartlist-item-img,
.cartlist-item-info {
  width: 100%;
  height: 150px;
  position: relative;
  font-size: 14px;
}
.checkbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 85px;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cartlist-item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: 15px;
}
.cartlist-item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  position: relative;
  top: 45px;
}
.cartlist-item-price {
  position: relative;
  top: 80px;
}
.realprice {
  position: absolute;
  left: 5px;
  color: #f56c6c;
}
.number {
  position: absolute;
  right: 40px;
  color: #f56c6c;
}
</style>
