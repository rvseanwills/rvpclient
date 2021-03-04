import { reportsService } from '../_services';


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

export const report = {
    namespaced: true,
    state,
    actions,
    mutations
};