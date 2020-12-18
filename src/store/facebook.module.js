import { facebookService } from '../_services';
import Vue from 'vue';
// import { router } from '../router';

const facebook_user = JSON.parse(localStorage.getItem('facebook'));
const user = JSON.parse(localStorage.getItem('user')) || null;
let business_id = null;
if ( !user ) {

    console.log("no user logged in ")

} else {
    business_id = user.business_id;
}


const state = {
    pageInsights: null,
    pageDetails: null,
    status: {},
    facebook_user: facebook_user,
    business_id: business_id
}


const actions = {
    getPageInsights({ dispatch, commit }, payLoad) {

        commit('pageinsightsRequest');

        facebookService.pageInsights(payLoad)
        .then(
            insights => {
                commit('pageinsightsSuccess', insights);
            },
            error => {
                commit('facebookpageFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
    },
    getPageDetails({ dispatch, commit }, payLoad) {

        commit('pagedetailsRequest');

        facebookService.pageDetails(payLoad)
        .then(
            details => {
                commit('pagedetailsSuccess', details);
            },
            error => {
                commit('facebookpageFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
    }

};


const mutations = {
    pageinsightsRequest(state) {
        state.status = { gettingInsights: true };
    },
    pageinsightsSuccess(state, insights) {
        state.status = { gettingInsights: true };
        Vue.set(state, 'pageInsights', insights)
        //state.pageInsights = insights;
    },
    facebookpageFailure(state, err) {
        if (err == 'Unauthorized') {
            localStorage.removeItem('facebook');
            state.facebook = null;
        }
        state.status = {};
        state.pageDetails = err;
    },
    pagedetailsRequest(state) {
        state.status = { gettingDetails: true };
    },
    pagedetailsSuccess(state, details) {
        state.status = { gettingDetails: true };
        state.pageDetails = details;
    },
    facebookLoginSuccess(state, user) {
        state.facebook_user = user;
        localStorage.setItem("facebook", JSON.stringify(user))
    }
};


export const facebook = {
    namespaced: true,
    state,
    actions,
    mutations
};