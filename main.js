import Vue from "vue";
import VueRouter from "vue-router";
import Routers from "./router.js";
import Vuex from "vuex";
import App from "./app.vue";
import "./style.css";


Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
  // 使用HTML5的History路由模式
  mode: "history",
  roters: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => {
    return h(App);
  }
});