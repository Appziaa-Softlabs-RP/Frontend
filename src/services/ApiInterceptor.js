import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
