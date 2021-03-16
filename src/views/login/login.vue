<template>
  <div class="login">
    <topbar class="login-topbar">
      <div slot="center">登录</div>
    </topbar>
    <div class="login-content">
      <el-form ref="form" :model="form" class="from">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="同意协议">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item class="last-item">
          <el-button
            type="primary"
            @click="onSubmit"
            :disabled="!form.delivery"
          >
            立即注册
          </el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import topbar from "components/common/topbar/topbar";

export default {
  components: {
    topbar,
  },
  data: function() {
    return {
      form: {
        name: "",
        password: "",
        phone: "",
        desc: "",
        delivery: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    cancel() {
      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: calc(100vh - 49px);
  background: url("../../assets/03.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login-topbar {
  background-color: #409eff;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
}
.login-content {
  padding-top: 44px;
  width: 98%;
  margin: 0 auto;
}
.from {
  padding-top: 60px;
}
.last-item {
  text-align: center;
}
</style>
