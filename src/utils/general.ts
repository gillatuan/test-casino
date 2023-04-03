import { NextRouter } from 'next/router'

export const byteConverter = (bytes: number, only: string, decimals: number | 0) => {
  const K_UNIT = 1024
  const SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']

  if (bytes == 0) return '0 Byte'

  if (only === 'MB') return (bytes / (K_UNIT * K_UNIT)).toFixed(decimals) + ' MB'

  let i = Math.floor(Math.log(bytes) / Math.log(K_UNIT))
  let resp = parseFloat((bytes / Math.pow(K_UNIT, i)).toFixed(decimals)) + ' ' + SIZES[i]

  return resp
}

export const checkRoleToOnboard = (router: NextRouter, isOnboard: boolean = false, role?: string) => {
  return router.push('/')
}
export const dataURLtoFile = (dataurl: any, filename?: string) => {
  if (dataurl && filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([u8arr], filename, { type: mime })
  }
}

export const renderTime = (time?: string) => {
  if (!time) return ''
  const date = new Date(time)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24))
  if (diffDays < 7) {
    return `${diffDays}d ago`
  }
  return `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short'
  })} ${date.getFullYear()}`
}

export const parseObjectToStringUrl = (params: any) => {
  let getParamSearch: string[] = []
  Object.keys(params).forEach(function (key) {
    if (!params[key]) {
      return
    }
    getParamSearch = [...getParamSearch, key + '=' + params[key]]
  })

  return getParamSearch.join('&')
}

export const parseDate = (d: Date) => {
  const date = new Date(d)
  const dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]

  return dateString
}
