<template>
  <div class="toast">
    <div class="message">{{toast_message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    toast_message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
}
.message {
  font-size: 14px;
  background-color: #000;
  color: #fff;
  padding: 5px 15px;
}
</style>
