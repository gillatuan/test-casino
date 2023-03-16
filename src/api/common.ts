import axios, { AxiosRequestConfig } from 'axios';

import { setupInterceptorsTo } from 'src/config/axiosInterceptor';

export const useGetData = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  const axiosClient = axios.create(config);
  const axiosInterceptor = setupInterceptorsTo(axiosClient);

  return axiosInterceptor.get(url);
};

export const useUpdateData = async (
  url: string,
  payload: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  const axiosClient = axios.create(config);
  const axiosInterceptor = setupInterceptorsTo(axiosClient);

  return axiosInterceptor.put(url, payload);
};

export const usePostData = async (
  url: string,
  payload: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  const axiosClient = axios.create(config);
  const axiosInterceptor = setupInterceptorsTo(axiosClient);

  return axiosInterceptor.post(url, payload);
};
