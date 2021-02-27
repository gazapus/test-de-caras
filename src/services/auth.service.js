import http from "../utils/http-common";
import authHeader from "./auth-header";

function signin(email, password, keepLogged) {
    return http.post("/auth/signin", { email, password })
        .then(response => {
            if (response.status === 200) {
                console.log("logueado")
                if (keepLogged) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                } else {
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                }
                return false;
            }
        })
        .catch(err => {
            return(err.response.data.message);
        })
};

function isLogged() {
    return http.get("/auth/check", { headers: authHeader() });
}

function signup(data) {
    return http.post(`/auth/signup`, data);
};

const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
    let sessionUser = sessionStorage.getItem("user");
    if (sessionUser) return JSON.parse(sessionUser);
    return JSON.parse(localStorage.getItem("user"));
};

function confirm(user_id) {
    return http.post(`/auth/confirmation/${user_id}`);
}

function updateLocal(data) {
    let user = getCurrentUser();
    user.name = data.name;
    user.lastname = data.lastname;
    if(sessionStorage.getItem("user")){
        sessionStorage.setItem("user", JSON.stringify(user));
    } else {
        localStorage.setItem("user", JSON.stringify(user));
    }
}

let methods = {
    signin,
    signup,
    logout,
    getCurrentUser,
    isLogged,
    confirm,
    updateLocal
};

export default methods;