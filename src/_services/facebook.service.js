const apiUrl = process.env.VUE_APP_BASEURL;

export const facebookService = {
    pageInsights,
    pageDetails,
    pagePosts,
    getPages
};

function pagePosts(payLoad) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': payLoad.token },
        body: JSON.stringify({ page_id: payLoad.page_id })
    };


    return fetch(`${apiUrl}/facebook/getPagePosts`, requestOptions)
    .then(handleResponse)
    .then(details => {
        console.log('TESTS', details)
        return details;
    });
}

function pageInsights(payLoad) {
    // TODO ADD PAGE ID IN HERE AND REMOVE FACEBOOK INFO
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

function getPages(payLoad) {
    const requestOptions = {
        method: 'POST',
        headers: {'Authorization': payLoad.token }
    };


    return fetch(`${apiUrl}/facebook/getPages`, requestOptions)
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