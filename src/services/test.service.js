import http from "../utils/http-common";
//import authHeader from "./auth-header";

function getAll() {
    return http.get("/test/get");
};

function get(id) {
    return http.get(`/test/get/${id}`);
};
    
function create(data) {
    return http.post("/test/create", data);
};

function setUserData(data) {
    localStorage.setUserData('userData', data);
}

function getUserData() {
    let userData = localStorage.getItem('userData');
    return userData;
}

let methods = {
    getAll,
    get,
    create,
    getUserData,
    setUserData
};

export default methods;