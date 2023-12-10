import axios from "axios";
import { enviroment } from "../enviroment";

const service = axios.create({
  baseURL: enviroment.API_BASE_URL,
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
