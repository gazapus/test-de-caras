import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER || "http://localhost:8080/",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*'
    }
});