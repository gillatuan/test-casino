import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'

export const withCheckRole = (WrappedComponent: FC<any>) => (props: any) => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      router.push('/dashboard')
    } else {
      if (router.pathname === '/' || router.pathname === '/signup' || router.pathname === '/login') {
        return
      } else {
        router.push('/')
      }
    }
  }, [])

  return <WrappedComponent {...props} />
}
