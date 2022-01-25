import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login.vue";
import Home from "../views/main/home/Home.vue";
import Reactive from "../views/main/reactive/Reactive.vue";
import Main from "../views/main/Main.vue";
import Client from "../views/main/client/Client.vue";
import Map from "../views/main/map/Map.vue";
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
    ],
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
