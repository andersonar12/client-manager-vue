import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import Login from "../views/login/Login.vue";
import Home from "../views/main/home/Home.vue";
import Reactive from "../views/main/reactive/Reactive.vue";
import Main from "../views/main/Main.vue";
import Client from "../views/main/client/Client.vue";
import Map from "../views/main/map/Map.vue";
import Info from "@/views/main/info/Info.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    component: Main,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      // { path: '', component: UserHome },
      { path: "", component: Home },
      { name: "Home", path: "home", component: Home },
      { name: "Map", path: "map", component: Map },
      { name: "Reactive", path: "reactive", component: Reactive },
      { name: "Client", path: "client/:id/:data?", component: Client },
      { name: "Info", path: "info", component: Info },
    ],
  },
  {
    //Path Matching
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

//Routes Protection
router.beforeEach((to, from, next) => {
  /* store.dispatch('fetchAccessToken'); */
  let token = store.state.token;
  if (to.fullPath.includes("/main")) {
    !token && next("/login");
  }
  if (to.fullPath === "/login") {
    token && next("/main");
  }

  next();
});

export default router;
