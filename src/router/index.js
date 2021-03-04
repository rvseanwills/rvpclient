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

router.beforeEach((to, from, next) => {
    console.log('We are here');
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            // let user = JSON.parse(localStorage.getItem('user'))
            // if(to.matched.some(record => record.meta.is_admin)) {
            //     if(user.is_admin == 1){
            //         next()
            //     }
            //     else{
            //         next({ name: 'userboard'})
            //     }
            // }else {
            //     next()
            // }
            next({ name: 'Reports'})
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'Reports'})
        }
    }else {
        next()
    }
})




