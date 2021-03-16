<template>
  <div class="navbar-item" @click="Jump_path" :class="{ ground: show_groud }">
    <div class="navbar-item-logo">
      <slot name="navbar-item-logo"></slot>
    </div>
    <div class="navbar-item-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  computed: {
    show_groud() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    Jump_path() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.navbar-item {
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.navbar-item > div {
  flex: 1;
}
.navbar-item-logo {
  font-size: 20px;
  margin-top: 2px;
}
.ground {
  background-color: #409eff;
  color: #fff;
}
</style>
