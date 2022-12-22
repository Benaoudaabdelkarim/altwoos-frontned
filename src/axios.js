import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
  baseURL: "https://api.tawoosrealty.com/api",
});
//php artisan serve --host=192.168.1.106 --port=8080

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  //if(store.state.demoMode==true){ config.headers["Goubba-Test"] = true }
  return config;
});

export default axiosClient;
