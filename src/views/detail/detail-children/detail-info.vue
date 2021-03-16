<template>
  <div class="detail-info">
    <el-row>
      <el-col :span="24" class="detail-info-btn">
        <div v-if="detail_info.detailImage">
          <el-button type="primary" plain>
            {{ detail_info.detailImage[0].key }}
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div v-if="detail_info.detailImage">
          <div
            v-for="(item, index) in detail_info.detailImage[0].list"
            :key="index"
          >
            <img :src="item" alt="" @load="detail_imgload" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      img_length: 0,
    };
  },
  props: {
    detail_info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    detail_imgload() {
      this.count = this.count + 1;
      if (this.count == this.img_length) {
        this.$emit("detail_imgload");
      }
    },
  },
  watch: {
    detail_info() {
      this.img_length = this.detail_info.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.detail-info {
  padding-top: 25px;
  padding-bottom: 20px;
  font-size: 12px;
}
.el-row {
  padding: 0 3px;
}
img {
  width: 100%;
}
.detail-info-btn {
  text-align: center;
  padding-bottom: 20px;
}
</style>
