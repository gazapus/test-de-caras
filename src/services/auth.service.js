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
            return(err.message);
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

let methods = {
    signin,
    signup,
    logout,
    getCurrentUser,
    isLogged
};

export default methods;