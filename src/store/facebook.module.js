import { facebookService } from '../_services';
// import { router } from '../router';

const facebook_user = JSON.parse(localStorage.getItem('facebook'));
const user = JSON.parse(localStorage.getItem('user')) || null;
let business_id = null;
if ( !user ) {

    console.log("no user logged in ")

} else {
    business_id = user.user.business.business_id;
}


const state = {
    pageInsights: null,
    pageDetails: null,
    status: {},
    facebook_user: facebook_user,
    business_id: business_id
}


const actions = {
    getPageInsights({ dispatch, commit }, {facebook, business, token }) {

        commit('pageinsightsRequest');

        facebookService.pageInsights(facebook, business, token)
        .then(
            insights => {
                commit('pageinsightsSuccess', insights);
            },
            error => {
                commit('pageinsightsFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
    },
    getPageDetails({ dispatch, commit }, {pageid, token}) {

        commit('pagedetailsRequest');

        facebookService.pageDetails(pageid, token)
        .then(
            details => {
                commit('pagedetailsSuccess', details);
            },
            error => {
                commit('pagedetailsFailure', error);
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
        state.pageInsights = insights;
    },
    pageinsightsFailure(state, err) {
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
    pagedetailsFailure(state, err) {
        state.status = {};
        state.pageDetails = err;
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