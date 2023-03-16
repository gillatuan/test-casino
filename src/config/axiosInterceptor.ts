import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import store from 'src/redux'
import { logout } from 'src/redux/user.slice'

const onRequest = (config: InternalAxiosRequestConfig) => {
  config.baseURL = process.env.NEXT_PUBLIC_PROJECT_SERVICE
  config.headers['Content-Type'] = 'application/json; charset=utf-8'

  const token = localStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }

  return config
}

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response && response.data) {
    return response.data
  }
  return response
}

const onResponseError = (error: AxiosError) => {
  if (error.response && error.response.status === 403) {
    store.dispatch(logout())
    window.location.href = '/'
  }
  console.log('error.response', error)
  // return onRequestError(error);
  // return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
