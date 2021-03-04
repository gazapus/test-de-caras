function getTodayDateString() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

function cleanEmptyFields(object) {
    let objectCleaned = Object.assign({}, object);
    for (let propName in objectCleaned) {
        if (objectCleaned[propName] === null || objectCleaned[propName] === undefined || objectCleaned[propName] === '') {
            delete objectCleaned[propName];
        }
    }
    return objectCleaned
}

export {
    getTodayDateString,
    cleanEmptyFields
}