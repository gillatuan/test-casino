import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const onRequest = (config: InternalAxiosRequestConfig) => {
  config.baseURL = process.env.API_SERVICE

  let token
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem('access_token')
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

const onRequestError = async (error: AxiosError) => {
  return error.response
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = (error: AxiosError) => {
  if (error.response && error.response.status === 403) {
    window.location.href = '/'
  }
  return onRequestError(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
