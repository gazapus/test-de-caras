import http from "../utils/http-common";
import authHeader from "./auth-header";

function updateWithoutMail(id, data) {
    return http.put(`/users/update/nomail/${id}`, data, { headers: authHeader() });
}

export default {
    updateWithoutMail
}