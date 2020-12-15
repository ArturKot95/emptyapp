import Vue from 'vue';
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/main.scss';

const Home = {
  template: '<div>Home</div>'
};
const Page1 = {
  template: '<div>Page 1</div>'
};

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