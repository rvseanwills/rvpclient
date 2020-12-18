import { userService } from '../_services';
import { router } from '../router';

// var user

// if (typeof localStorage.getItem('user') == 'undefined') {
//     user = null;
// } else {
//     user = JSON.parse(localStorage.getItem('user')) ;
// }

// const state = user
//     ? { status: { loggedIn: true }, user }
//     : { status: {}, user: null };

const state = {
    token: null,
    user: null,
    status: {
        loggedIn: false
    }
}


const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit('loginRequest', { email });

        userService.login({email, password})
            .then(
                user => {
                    console.log(user);
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    console.log(error);
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }

};


const mutations = {
    initStore(state) {
        if (localStorage.getItem('store')) {
            var store = JSON.parse(localStorage.getItem('store'));
            this.replaceState(
                Object.assign(state, store)
            );
        }
    },
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.token = user.tokens[0].token;
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state = {
            token: null,
            user: null,
            status: {
                loggedIn: false
            }
        }
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    }
};


export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};