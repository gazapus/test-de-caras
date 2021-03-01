import http from "../utils/http-common";
import authHeader from "./auth-header";

function updateWithoutMail(id, data) {
    return http.put(`/users/update/nomail/${id}`, data, { headers: authHeader() });
}

function createEmailChange(user_id, originalEmail, newEmail) {
    return http.post(`/changerequest/create`, {user_id, originalEmail, newEmail}, { headers: authHeader() });
}

function confirmEmailChange(id) {
    return http.put(`/changerequest/confirm/${id}`);
}

function cancelEmailChange(id) {
    return http.put(`/changerequest/cancel/${id}`);
}

export default {
    updateWithoutMail,
    createEmailChange,
    confirmEmailChange,
    cancelEmailChange
}