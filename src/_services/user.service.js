// import { authHeader } from '../_helpers';
const apiUrl = process.env.VUE_APP_BASEURL;

export const userService = {
    login,
    logout,
    register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};


function login({email, password}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    };


return fetch(`${apiUrl}/user/login`, requestOptions)
    .then(handleResponse)
    .then(res => {
        // login successful if there's a jwt token in the response
        if (res.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return res.user;
        }

        
    });

}

function register(user) {
    console.log(user)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };


return fetch(`${apiUrl}/user/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
        // login successful if there's a jwt token in the response
        if (user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return user;
        }

        
    });

}


function logout() {
    // remove user from local storage to log user out
    localStorage.clear();
}



// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };


// return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);

// }


// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };


// return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);

// }


// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };


// return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);

// }


// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };


// return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);

// }


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }


        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
});

}