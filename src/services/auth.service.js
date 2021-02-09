import http from "../utils/http-common";
//import authHeader from "./auth-header";

function signin(email, password) {
    return http.post("/auth/signin", { email, password })
        .then(response => {
            if (response.status === 200) 
                localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(err => {
            console.log(err.message);
        })
};

function signup(data) {
    return http.post(`/auth/signup`, data);
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

let methods = {
    signin,
    signup,
    logout,
    getCurrentUser
};

export default methods;