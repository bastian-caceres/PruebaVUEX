import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// iconos
import { library } from '@fortawesome/fontawesome-svg-core';
// fab
import { faGithubSquare, faLinkedin, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
// fas
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
// far
import { faWindowClose} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTrashAlt, faEdit, faPlus, faWindowClose, faGithubSquare, faLinkedin, faFacebookSquare, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
