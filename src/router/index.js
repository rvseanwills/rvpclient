import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../views/Welcome.vue"
import Reports from "../views/Reports.vue"
import Posts from "../views/Posts.vue"
import Visualisations from "../views/Visualisations.vue"
import Team from "../views/Team.vue"
import Account from "../views/Account.vue"

import Login from "../views/Login.vue"

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },

  {
    path: "/Reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/Posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/Visualisations",
    name: "Visualisations",
    component: Visualisations
  },
  {
    path: "/Team",
    name: "Team",
    component: Team
  },
  {
    path: "/Account",
    name: "Account",
    component: Account
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    name: "Welcome",
    component: Welcome
  },
];

export const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loggedIn = JSON.parse(localStorage.getItem('store'));

  //TODODODDODODODO really not working

  if (!loggedIn && to.path !== "/Login") {
    return next('/Login');
  }


  next();
})

