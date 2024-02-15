import axios from "axios";
import { getToken } from "../utils/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    // console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      //เช็ค Token
    }
    return config;
  },
  (error) => Promise.reject(error)
  // ไปที่ Error
);

export default axios;
