import axios from "axios";
import { ACCESS_TOKEN_KEY } from "./constant";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

const requestSuccessInterceptor = async (config) => {
  const authToken = await localStorage.getItem(ACCESS_TOKEN_KEY);
  if (authToken) {
    config.headers.Authorization = authToken;
  }
  let cnfg = {};
  config.params = {
    ...config.params,
    ...cnfg,
  };
  return config;
};

api.interceptors.request.use(requestSuccessInterceptor);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err?.response?.status === 401) {
      try {
       console.log('api gives 401 error ')
      } catch (_error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.location.href = "/";
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);


export const getData = (url, callback, queryParams = null, configs = {}) => {
  return api
    .get(url, { params: queryParams, ...configs })
    .then((res) => res.data)
    .then((data) => callback(data));
};

export const postData = (url, callBack, data = null ,) => {
  return api
    .post(url , data)
    .then((res) => res.data)
    .then((d) => callBack(d));
};


export { api };
