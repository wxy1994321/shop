import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import vueLazyLoad from 'vue-lazyload';

Vue.use(ElementUI);

Vue.use(vueLazyLoad, {
  loading: require('assets/02.png')   //加载图片
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')