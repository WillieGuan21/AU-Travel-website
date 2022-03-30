import { createRouter, createWebHashHistory } from "vue-router";
// import store from "../store";
import Home from "../views/home/index.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "home page",
      keepAlive: true,
      name: "Home",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    component: () => import("../views/about/index.vue"),
  },
  {
    path: "/journey",
    name: "Journey",
    meta: {
      title: "Journey",
    },
    component: () => import("../views/journey/au_perth.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    meta: {
      title: "Gallery",
    },
    component: () => import("../views/gallery/index.vue"),
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
