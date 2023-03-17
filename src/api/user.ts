import { useQuery, useMutation } from 'react-query'

import { Response } from '@/types/api.type'
import { Role } from '@/types/user.type'
import { usePostData } from './common'

export type LoginRequest = {
  username: string
  password: string
}
interface LoginResponse {
  user: {
    isOnboard: string
    userRole?: Role | ''
    token: string
    email: any
    name: any
  }
  code?: string
  statusText?: string
  status?: number
  statusCode?: number
  message?: string
  args?: any
  data: { user: any }
}

const useLogin = () => {
  return useMutation(
    (payload: LoginRequest | FormData): Promise<Response<LoginResponse>> => usePostData('/token', payload)
  )
}

export { useLogin }
