<template>
  <div class="home">
    <topbar class="topbar">
      <div slot="center">购物街</div>
    </topbar>
    <home-navigation
      :navigation_title="navigation_title"
      @navigation_click="navigation_click"
      ref="homeNavigation1"
      class="homeNavigation1"
      v-show="homeNavigation_show"
    >
    </home-navigation>
    <scroll
      class="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @loadmore="loadmore"
      @position="position"
      ref="scroll"
    >
      <home-carousel :banner="banner"></home-carousel>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-popular></home-popular>
      <home-navigation
        :navigation_title="navigation_title"
        @navigation_click="navigation_click"
        ref="homeNavigation2"
      >
      </home-navigation>
      <goods :goods="commodity_data" @imgload="imgload"></goods>
    </scroll>
    <transition>
      <back-top v-show="backtop_show" @click.native="backtop"></back-top>
    </transition>
  </div>
</template>

<script>
// 公共组件
import topbar from "components/common/topbar/topbar";
import scroll from "components/common/scroll/scroll";
import goods from "components/common/goods/goods";
import backTop from "components/common/backtop/backtop";

//home组件
import homeCarousel from "./home-children/home-carousel";
import homeRecommend from "./home-children/home-recommend";
import homePopular from "./home-children/home-popular";
import homeNavigation from "./home-children/home-navigation";

//api
import { getHomeMultidata, getHomeData } from "network/home";

export default {
  data() {
    return {
      banner: [], //轮播图
      recommend: [], //轮播下面的那个
      navigation_title: ["流行", "新款", "分类"],
      keyworks: "pop", //导航关键字
      goods: {
        //导航数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      homeNavigation_show: false, //控制导航显示
      backtop_show: false, //回到顶部显示
      y: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.y, 0); //进入home在设置y坐标
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.y = this.$refs.scroll.Bs.y; //离开home记录y坐标
  },
  methods: {
    // api
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list); //解构
      });
    },

    //组件
    navigation_click(i) {
      if (i == 0) {
        this.keyworks = "pop";
        this.$refs.homeNavigation1.i = 0;
        this.$refs.homeNavigation2.i = 0;
      } else if (i == 1) {
        this.keyworks = "new";
        this.$refs.homeNavigation1.i = 1;
        this.$refs.homeNavigation2.i = 1;
      } else {
        this.keyworks = "sell";
        this.$refs.homeNavigation1.i = 2;
        this.$refs.homeNavigation2.i = 2;
      }
    },

    loadmore() {
      this.getHomeData(this.keyworks);
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refresh();
    },
    position(position) {
      let positionY = Math.abs(position.y);
      let offsetTop = this.$refs.homeNavigation2.$el.offsetTop;

      if (positionY > offsetTop) {
        this.homeNavigation_show = true;
      } else {
        this.homeNavigation_show = false;
      }

      if (positionY > 1000) {
        this.backtop_show = true;
      } else {
        this.backtop_show = false;
      }
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    imgload() {
      this.$refs.scroll.refresh();
    },
  },
  components: {
    topbar,
    scroll,
    goods,
    backTop,
    homeCarousel,
    homeRecommend,
    homePopular,
    homeNavigation,
  },
  computed: {
    commodity_data() {
      return this.goods[this.keyworks].list;
    },
  },
};
</script>

<style scoped>
.home {
  height: calc(100% - 49px);
}
.topbar {
  background-color: #409eff;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
.homeNavigation1 {
  position: fixed;
  width: 100%;
  top: 44px;
  z-index: 99;
  background-color: #fff;
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
