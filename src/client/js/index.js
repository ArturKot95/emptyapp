import Vue from 'vue';
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../styles/main.scss';

import Home from '../components/Home.vue';
import Page1 from '../components/Page1.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 }
];

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  data: {
    appName: 'My Appy'
  },
  router
});