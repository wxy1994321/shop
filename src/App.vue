<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";

export default {
  components: { navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
