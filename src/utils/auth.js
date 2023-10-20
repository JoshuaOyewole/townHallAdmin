
export function getToken() {
    return localStorage.getItem('token');
}


export function getUserDatas() {
    const username = localStorage.getItem('username');
    const user_id = localStorage.getItem('user_id');
    const token = getToken();
    const profilePicture = localStorage.getItem('profilePicture');

    return { username, user_id, token, profilePicture }
}

export function isAuthenticated(){
    const token = getToken();//Get Token from localStorage
    return !!token; // Return true if the token exists, false otherwise
}


/* 
firstname, lastname, token, user_id, profilePicture
*/