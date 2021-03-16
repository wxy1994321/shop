<template>
  <div class="shopcat">
    <topbar class="shopcat-topbar">
      <div slot="center">
        购物车<span>( {{ $store.getters.cartlist_length }} )</span>
      </div>
    </topbar>
    <scroll class="shopcat-scroll" ref="scroll">
      <cartlist :cartlist="cartlist"></cartlist>
    </scroll>
    <shop-total @btn_click="btn_click"></shop-total>
    <toast :toast_message="toast_message" v-show="toast"></toast>
  </div>
</template>

<script>
// 公共组件
import topbar from "components/common/topbar/topbar";
import scroll from "components/common/scroll/scroll";
import toast from "components/common/toast/toast";

//shopcart组件
import cartlist from "./shopcat-children/cartlist";
import shopTotal from "./shopcat-children/shop-total";

export default {
  data() {
    return {
      checked: true,
      toast: false,
      toast_message: "",
    };
  },
  components: {
    topbar,
    scroll,
    cartlist,
    shopTotal,
    toast,
  },
  computed: {
    cartlist() {
      return this.$store.state.cartlist;
    },
    total_price() {
      return this.$store.getters.total;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    btn_click() {
      this.toast = true;
      this.toast_message = this.total_price;
      setTimeout(() => {
        this.toast = false;
        this.toast_message = "";
      }, 1000);
    },
  },
};
</script>

<style scoped>
.shopcat {
  height: calc(100% - 49px);
  position: relative;
  background-color: #fff;
}
.shopcat-topbar {
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.shopcat-scroll {
  margin-top: 44px;
  height: calc(100% - 44px - 40px);
}
.shopcat-topbar span {
  margin-left: 3px;
  font-size: 13px;
}
.shopcat-list {
  box-sizing: border-box;
  height: 140px;
  width: 100%;
  position: relative;
  display: flex;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}
.shopcat-list > div:nth-of-type(1) {
  flex: 1;
  position: relative;
}
.shopcat-list > div:nth-of-type(2) {
  flex: 5;
  background-color: pink;
  position: relative;
}
.shopcat-list > div:nth-of-type(3) {
  flex: 10;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.checked {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 80px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
p {
  font-size: 14px;
}
.shopcat-list > div:nth-of-type(3) > p:first-of-type {
  margin-top: 10px;
}
.shopcat-list > div:nth-of-type(3) > p:nth-of-type(2) {
  margin-top: 30px;
}
</style>
