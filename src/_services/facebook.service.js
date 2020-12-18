const apiUrl = process.env.VUE_APP_BASEURL;

export const facebookService = {
    pageInsights,
    pageDetails
};


function pageInsights(payLoad) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': payLoad.token },
        body: JSON.stringify({ facebook: payLoad.facebook, business: payLoad.business })
    };


    return fetch(`${apiUrl}/facebook/getNewStats`, requestOptions)
    .then(handleResponse)
    .then(pageInsights => {
        return pageInsights;
    });

}

function pageDetails(payLoad) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': payLoad.token },
        body: JSON.stringify({ page_id: payLoad.page_id })
    };


    return fetch(`${apiUrl}/facebook/getPageDetails`, requestOptions)
    .then(handleResponse)
    .then(details => {
        return details;
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