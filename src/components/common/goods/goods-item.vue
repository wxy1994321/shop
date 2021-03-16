<template>
  <el-col :span="12">
    <div @click="Jump_router">
      <img v-lazy="showimg" @load="imgload" />
      <br />
      <div class="goodsitem-title" v-if="goodsItem.title != undefined">
        {{ goodsItem.title | spilce_str }}
      </div>
      <div class="price">
        <div>￥ {{ goodsItem.price }}</div>
        <div>
          <i class="el-icon-star-off"></i>
          {{ goodsItem.cfav }}
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      iid: null,
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    spilce_str(str) {
      if (str.length != undefined) {
        if (str.length > 20) {
          return str.slice(0, 16) + "..";
        }
      }
      return str;
    },
  },
  mounted() {
    this.iid = this.goodsItem.iid;
  },
  methods: {
    Jump_router() {
      this.$router.push(`/detail/${this.iid}`);
    },
    imgload() {
      this.$emit("imgload");
    },
  },
  computed: {
    showimg() {
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },
};
</script>

<style scoped>
img {
  width: 95%;
  margin-top: 5px;
  height: 250px;
}
.goodsitem-title {
  font-size: 12px;
  margin-top: 5px;
  padding: 0 2px;
  color: #000;
}
.price {
  display: flex;
  margin-top: 5px;
  font-size: 12px;
  color: #f56c6c;
}
.price > div {
  flex: 1;
}
</style>
