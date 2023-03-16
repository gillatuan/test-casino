import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import store from "src/redux";
import { logout } from "src/redux/user.slice";

const onRequest = (config: InternalAxiosRequestConfig) => {
  config.baseURL = process.env.API_SERVICE;
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }

  console.log("====================================");
  console.log("config", config);
  console.log("====================================");
  return config;
};

const onRequestError = async (error: AxiosError) => {
  return error.response;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError) => {
  if (error.response && error.response.status === 403) {
    store.dispatch(logout());
    window.location.href = "/";
  }
  console.log("error.response", error);
  return onRequestError(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
