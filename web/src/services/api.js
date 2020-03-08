// faz a conexão com o mongo db
import axios from 'axios';
// define uma url base para se comunicar entre o front e o backend
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;