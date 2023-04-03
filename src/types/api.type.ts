export interface Response<T> {
  result: any
  statusText: any
  status: number
  error?: string
  message?: string
  data?: T
}
