import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login.vue";
import Home from "../views/main/home/Home.vue";
import About from "../views/main/about/About.vue";
import Main from "../views/main/Main.vue";

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
      { path: "home", component: Home },
      { path: "about", component: About },
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
