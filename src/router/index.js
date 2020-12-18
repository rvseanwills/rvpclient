import Vue from "vue";
import VueRouter from "vue-router";
import Facebook from "../views/Facebook.vue"
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
    path: "/facebook",
    name: "Facebook",
    component: Facebook
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    name: "Facebook",
    component: Facebook
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

