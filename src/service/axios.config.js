import axios from 'axios'
export const authApi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});