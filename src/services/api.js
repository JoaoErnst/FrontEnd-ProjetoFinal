import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost/slimProjeto"
});

export default api;