<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  data() {
    return {
      Bs: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.Bs = new Bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    this.Bs.on("scroll", (position) => {
      this.$emit("position",position);
    });
    this.Bs.on("pullingUp", () => {
      this.$emit("loadmore");
    });
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.Bs.scrollTo(x, y, time);
    },
    finishPullUp() {
      //上啦加载更多
      this.Bs.finishPullUp();
    },
    refresh() {
      //重新计算高度
      this.Bs.refresh();
    },
  },
};
</script>

<style scoped></style>
