<template>
  <div class="classify">
    <topbar class="classify-topbar">
      <div slot="center">
        商品分类
      </div>
    </topbar>

    <div class="content">
      <classify-menu
        :categories="categories"
        @selectItem="selectItem"
      ></classify-menu>

      <scroll id="tab-content" ref="scroll" :probeType="3" @position="position">
        <classify-content
          :subcategories="showSubcategory"
          @imgload="imgload_content"
        >
        </classify-content>

        <classify-navigation
          :navigation_title="navigation_title"
          @navigation_click="navigation_click"
        >
        </classify-navigation>

        <goods :goods="showCategoryDetail" @load="imgload_goods"></goods>

      </scroll>

      <transition>
        <back-top
          @click.native="backtop_click"
          v-show="backTop_show"
        ></back-top>
      </transition>
      
    </div>
  </div>
</template>

<script>
//公共组件
import topbar from "components/common/topbar/topbar";
import scroll from "components/common/scroll/scroll";
import goods from "components/common/goods/goods";
import backTop from "components/common/backtop/backtop";

//api
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/classify";

//子组件
import classifyMenu from "./classify-children/classify-menu";
import classifyContent from "./classify-children/classify-content";
import classifyNavigation from "./classify-children/classify-navigation";

export default {
  data() {
    return {
      categories: [],
      category_data: {},
      category_index: -1,
      navigation_title: ["综合", "新品", "销量"],
      type: "pop",
      backTop_show: false,
    };
  },
  components: {
    topbar,
    scroll,
    goods,
    backTop,
    classifyMenu,
    classifyContent,
    classifyNavigation,
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.category_index == -1) return {};
      return this.category_data[this.category_index].subcategories;
    },
    showCategoryDetail() {
      if (this.category_index === -1) return [];
      return this.category_data[this.category_index].categoryDetail[this.type];
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = [...res.data.category.list];
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.category_data[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },

    _getSubcategories(index) {
      this.category_index = index;
      const mailKey = this.categories[index].maitKey;

      getSubcategory(mailKey).then((res) => {
        this.category_data[index].subcategories = res.data;
        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },

    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.category_index].miniWallkey;

      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来

        this.category_data[this.category_index].categoryDetail[type] = res;

        this.category_data = { ...this.category_data };
      });
    },

    selectItem(index) {
      this._getSubcategories(index);
    },
    imgload_content() {
      this.$refs.scroll.refresh();
    },
    imgload_goods() {
      this.$refs.scroll.refresh();
    },
    navigation_click(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    },
    position({ y }) {
      if (Math.abs(y) > 1000) {
        this.backTop_show = true;
      } else {
        this.backTop_show = false;
      }
    },
    backtop_click() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.classify {
  height: calc(100% - 49px);
}
.classify-topbar {
  background-color: #409eff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 1px 1px #dcdfe6;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
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
