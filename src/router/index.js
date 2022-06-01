import { createRouter, createWebHashHistory } from "vue-router";
// import store from "../store";
import Home from "../views/home/index.vue";
import Login from "../views/login.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "home page",
      keepAlive: true,
    },
    components: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "login page",
      keepAlive: true,
      name: "Login",
    },
    component: Login,
  },
  {
    path: "/introduce",
    name: "WESTERN AUSTRALIA",
    meta: {
      title: "WESTERN AUSTRALIA",
    },
    component: () => import("../views/introduce/westenAu.vue"),
  },
  {
    path: "/journey",
    name: "JOURNEY",
    meta: {
      title: "JOURNEY",
    },
    component: () => import("../views/journey/au_perth.vue"),
  },
  {
    path: "/gallery",
    name: "GALLERY",
    meta: {
      title: "GALLERY",
    },
    component: () => import("../views/gallery/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "test",
    },
    component: () => import("../views/gallery/test.vue"),
  },
  // {
  //   path: "/warningSetting",
  //   name: "WarningSetting",
  //   meta: {
  //     title: "告警通知設定",
  //   },
  //   component: () => import("../views/warning-setting/index.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
