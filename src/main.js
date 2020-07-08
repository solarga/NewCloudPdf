import Vue from 'vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import App from './App.vue'
import store from './store'
import router from './router'
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';
import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import Toast from 'muse-ui-toast';

import * as http from "@/api/api"
Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.use(MuseUI);
Vue.use(Loading);
Vue.use(NProgress);
Vue.use(Message);
Vue.use(Toast);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
