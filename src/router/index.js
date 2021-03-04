import Vue from "vue";
import VueRouter from "vue-router";

// import Welcome from "../views/Welcome.vue"
import Reports from "../views/Reports.vue"
// import Posts from "../views/Posts.vue"
// import Visualisations from "../views/Visualisations.vue"
// import Team from "../views/Team.vue"
import Account from "../views/Account.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/Reports",
    name: "Reports",
    component: Reports,
    meta: {
        requiresAuth: true
    }
  },
//   {
//     path: "/Posts",
//     name: "Posts",
//     component: Posts
//   },
//   {
//     path: "/Visualisations",
//     name: "Visualisations",
//     component: Visualisations
//   },
//   {
//     path: "/Team",
//     name: "Team",
//     component: Team
//   },
  {
    path: "/Account",
    name: "Account",
    component: Account,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
        guest: true
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {
        guest: true
    }
  },
  {
    path: "*",
    name: "Reports",
    component: Reports
  },
];

export const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const loggedIn = JSON.parse(localStorage.getItem('store'));

//   //TODO

//   if (!loggedIn && to.path !== "/Login") {
//     return next('/Login');
//   }


//   next();
// })

