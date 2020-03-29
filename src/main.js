import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import inicio from './inicio.vue'
import login from './login.vue'
import extras from './extras.vue'
import conferenciasYtalleres from './conferenciasYtalleres.vue'

Vue.use(VueRouter);
const routes = [
  {path: '/conferenciasYtalleres', component: conferenciasYtalleres},
  {path: '/extras', component: extras},
  {path: '/login', component: login},
  {path: '/inicio', component: inicio},
  {path: '/', component: inicio}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('inicio', inicio);
Vue.component('login', login);
Vue.component('extras', extras);
Vue.component('conferenciasYtalleres', conferenciasYtalleres);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
