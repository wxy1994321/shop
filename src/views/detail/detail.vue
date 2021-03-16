<template>
  <div class="detail">
    <topbar class="detail-topbar">
      <i class="el-icon-arrow-left" slot="left" @click="goback"></i>
      <div slot="center" class="detail-title">
        <div
          v-for="(item, index) in detail_title"
          :class="{ blue: i == index }"
          @click="detail_title_click(index)"
        >
          {{ item }}
        </div>
      </div>
    </topbar>
    <scroll class="scroll" ref="scroll" :probeType="3" @position="position">
      <detail-carousel :detail_topImages="detail_topImages"></detail-carousel>
      <detail-product-information :detail_goods="detail_goods">
      </detail-product-information>
      <detail-shop :detail_shop="detail_shop"></detail-shop>
      <detail-info :detail_info="detail_info" @detail_imgload="detail_imgload">
      </detail-info>
      <detail-param-info
        :detail_param_info="detail_param_info"
        ref="detail_param_info"
      >
      </detail-param-info>
      <detail-rate :detail_rate="detail_rate" ref="detail_rate"> </detail-rate>
      <detail-popular-recommendation ref="detail_popular_recommendation" />
      <goods
        :goods="detail_popular_recommendation_goods"
        @imgload="imgload"
      ></goods>
    </scroll>
    <detail-settlement @addcart="addcart"></detail-settlement>
    <transition>
      <back-top @click.native="backtop" v-show="backtop_show_state"></back-top>
    </transition>
    <toast v-show="toast" :toast_message="toast_message"></toast>
  </div>
</template>

<script>
//公共组件
import topbar from "components/common/topbar/topbar";
import scroll from "components/common/scroll/scroll";
import goods from "components/common/goods/goods";
import backTop from "components/common/backtop/backtop";
import toast from "components/common/toast/toast";

//detail组件
import detailCarousel from "./detail-children/detail-carousel";
import detailProductInformation from "./detail-children/detail-product-information";
import detailShop from "./detail-children/detail-shop";
import detailInfo from "./detail-children/detail-info";
import detailParamInfo from "./detail-children/detail-param-info";
import detailRate from "./detail-children/detail-rate";
import detailPopularRecommendation from "./detail-children/detail-popular-recommendation";
import detailSettlement from "./detail-children/detail-settlement";

//api
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  Goodsparam,
} from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: this.$route.params.iid,
      i: 0,
      backtop_show_state: false,
      detail_title: ["商品", "参数", "评论", "推荐"],
      detail_topImages: [], //轮播图
      detail_goods: {}, //无理由退货
      detail_shop: {}, //店铺基本信息
      detail_info: {}, //穿着效果
      detail_param_info: {}, //参数信息
      detail_rate: {}, //评论信息
      detail_popular_recommendation_goods: [], //推荐数据
      arr: [],
      toast: false,
      toast_message: "",
    };
  },
  created() {
    getDetail(this.iid).then((res) => {
      //轮播图
      this.detail_topImages = res.result.itemInfo.topImages;
      //无理由退货
      this.detail_goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      //店铺基本信息
      this.detail_shop = new Shop(res.result.shopInfo);
      //穿着效果
      this.detail_info = res.result.detailInfo;
      //参数信息
      this.detail_param_info = new Goodsparam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      //评论
      if (res.result.rate.cRate != 0) {
        this.detail_rate = res.result.rate.list[0];
      }
      //推荐数据
      getRecommend().then((res) => {
        this.detail_popular_recommendation_goods = res.data.list;
      });
    });
  },
  components: {
    scroll,
    topbar,
    goods,
    backTop,
    toast,
    detailCarousel,
    detailProductInformation,
    detailShop,
    detailInfo,
    detailParamInfo,
    detailRate,
    detailPopularRecommendation,
    detailSettlement,
  },
  updated() {
    this.$nextTick(() => {
      this.arr = [];
      this.arr.push(0);
      this.arr.push(this.$refs.detail_param_info.$el.offsetTop);
      this.arr.push(this.$refs.detail_rate.$el.offsetTop);
      this.arr.push(this.$refs.detail_popular_recommendation.$el.offsetTop);
      this.arr.push(Number.MAX_SAFE_INTEGER);
    });
  },
  methods: {
    goback() {
      this.$router.back();
    },
    detail_title_click(index) {
      this.i = index;
      this.$refs.scroll.scrollTo(0, -this.arr[this.i]);
    },
    detail_imgload() {
      this.$refs.scroll.refresh();
    },
    imgload() {
      this.$refs.scroll.refresh();
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    position(position) {
      let y = Math.abs(position.y);
      y > 1000
        ? (this.backtop_show_state = true)
        : (this.backtop_show_state = false);

      for (let i = 0; i < this.arr.length - 1; i++) {
        if (y >= this.arr[i] && y <= this.arr[i + 1]) {
          this.i = i;
        }
      }
    },
    addcart() {
      const obj = {};
      obj.image = this.detail_topImages[0];
      obj.title = this.detail_goods.title;
      obj.desc = this.detail_goods.desc;
      obj.realprice = this.detail_goods.realprice;
      obj.iid = this.iid; //用户唯一标识
      obj.checked = true;
      this.$store.dispatch("addcart", obj).then((res) => {
        this.toast_message = res;
        this.toast = true;
        setTimeout(() => {
          this.toast_message = "";
          this.toast = false;
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 1px 1px #dcdfe6;
}
.detail-topbar {
  position: fixed;
  top: 0;
  background-color: #fff;
}
.detail-title {
  display: flex;
}
.detail-title > div {
  flex: 1;
  font-size: 12px;
}
.blue {
  color: #409eff;
}
.scroll {
  height: calc(100vh - 44px - 58px);
  margin-top: 44px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
