import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 5000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default apiInstance