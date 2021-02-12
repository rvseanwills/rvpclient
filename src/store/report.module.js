import { reportsService } from '../_services';
import Vue from 'vue';
// import { router } from '../router';

// const facebook_user = JSON.parse(localStorage.getItem('facebook'));
// const user = JSON.parse(localStorage.getItem('user')) || null;
// let business_id = null;
// if ( !user ) {

//     console.log("no user logged in ")

// } else {
//     business_id = user.business_id;
// }


const state = {
    status: {},
    reports: []
}


const actions = {

    getReport({ dispatch, commit }, payLoad) {
        reportsService.getReport(payLoad)
        .then(
            report => {
                commit('getReportSuccess', report);
            },
            error => {
                commit('getReportFail', error);
                dispatch('alert/error', error, { root: true });
            }
        );
    }
};


const mutations = {
    
};


export const facebook = {
    namespaced: true,
    state,
    actions,
    mutations
};