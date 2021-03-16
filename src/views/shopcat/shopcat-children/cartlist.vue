<template>
  <div>
    <cartlist-item v-for="(item,index) in cartlist" :item="item" :index="index" :key="Math.random()"></cartlist-item>
  </div>
</template>

<script>
import cartlistItem from "./cartlist-item";
export default {
  props: {
    cartlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    cartlistItem,
  },
};
</script>

<style scoped>

</style>
