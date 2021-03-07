import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/group/get");
};

function get(id) {
    return http.get(`/group/get/one/${id}`);
};

function getUniversal() {
    return http.get(`/group/get/universal`, {headers: authHeader()});
};

function getPublicInfo(id) {
    return http.get(`/group/get/basic/${id}`);
};

function setGroupData(data) {
    sessionStorage.setItem('group', JSON.stringify(data));
}

function getGroupData() {
    let groupData = sessionStorage.getItem('group');
    return JSON.parse(groupData);
}

function create(data) {
    return http.post("/group/create", data, {headers: authHeader()});
};

function addTest(test_id, group_id) {
    return http.put(`/group/update/add/${group_id}`, {test_id});
};

let methods = {
    getAll,
    get,
    create,
    addTest,
    getUniversal,
    getPublicInfo,
    setGroupData,
    getGroupData
};

export default methods;