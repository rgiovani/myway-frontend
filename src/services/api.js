import axios from "axios";

export const apiURL = 'http://ec2-18-231-154-57.sa-east-1.compute.amazonaws.com:3000'
const api = axios.create({
  baseURL: apiURL,
});

export function setToken(token) {
  api.defaults.headers.Authorization = token
}

export default api;