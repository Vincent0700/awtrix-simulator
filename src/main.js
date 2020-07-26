import Vue from 'vue';

// reset.css
import 'reset-css';

// iconfont
import '@scss/style.scss';

// element-ui
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, {
  size: 'small'
});

// views
import App from '@/App.vue';

// config
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
