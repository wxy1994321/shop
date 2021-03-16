<template>
  <div>
    <scroll id="tab-menu">
      <div class="menu-list">
        <div
          class="menu-list-item"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in categories"
          :key="index"
          @click="itemClick(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/scroll";

export default {
  components: {
    scroll,
  },
  props: {
    categories: Array,
    default() {
      return [];
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    },
  },
};
</script>

<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.menu-list-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 700;
  color: #409eff;
  background-color: #fff;
  border-left: 3px solid #f56c6c;
}
</style>
