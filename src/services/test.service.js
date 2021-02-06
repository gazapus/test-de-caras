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

let methods = {
    getAll,
    get,
    create
};

export default methods;