const apiUrl = process.env.VUE_APP_BASEURL;

export const reportsService = {
    pageInsights,
    pageDetails,
    pagePosts,
    getPages
};

function getReport(payLoad) {
    // TODO ADD PAGE ID IN HERE AND REMOVE FACEBOOK INFO
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': payLoad.token },
        body: JSON.stringify({ report_id: payLoad.report_id, since: payLoad.since, until: payLoad.until })
    };


    return fetch(`${apiUrl}/report/getData`, requestOptions)
    .then(handleResponse)
    .then(report => {
        return report;
    });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);

        }

        return data;
    });

}