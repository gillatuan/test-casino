import { Role } from './user.type'

export interface Response<T> {
  result: any
  statusText: any
  status: number
  error?: string
  message?: string
  data?: T
}

export interface IRegisterResponse {
  _id: string | null
  address: string | null
  code: string
  createdAt: string | null
  email: string | null
  isWhatsapp: boolean | null
  merchantCode: string | null
  nationality: string | null
  passwordPrevious: string | null
  passwordHash: string | null
  role: Role | null
}

export type TProfileResponse = {
  message: string
  user: TProfileResponse | undefined
  errorCode: boolean
  data: any
}
