import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import store from 'src/redux'
import { logout } from 'src/redux/user.slice'

export const axiosClient = axios.create({
  baseURL: 'http://3.0.51.142/api',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')

    if (!config.headers) {
      return config
    }
    if (token) {
      config.headers.token = token
    }

    return config
  },
  async (error: AxiosError) => {
    return await Promise.reject(error)
  }
)
axiosClient.interceptors.response.use(
  async (response: AxiosResponse): Promise<AxiosResponse<any, any>> => {
    // if (response && response.data) {
    //   return response.data;
    // }
    return response
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 403) {
      store.dispatch(logout())
      window.location.href = '/'
    }
    console.log('error.response', error.response)
    return error.response
  }
)

export default axiosClient
