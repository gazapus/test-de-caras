function setUserData(data) {
    sessionStorage.setItem('userTest', JSON.stringify(data));
}

function getUserData() {
    let userData = sessionStorage.getItem('userTest');
    return JSON.parse(userData);
}

function removeUserData() {
    sessionStorage.removeItem('userTest');
}

function setGroupData(data) {
    sessionStorage.setItem('group', JSON.stringify(data));
}

function getGroupData() {
    let groupData = sessionStorage.getItem('group');
    return JSON.parse(groupData);
}

function removeGroupData() {
    sessionStorage.removeItem('group');
}

let methods = {
    getUserData,
    setUserData,
    setGroupData,
    getGroupData,
    removeUserData,
    removeGroupData
};

export default methods;