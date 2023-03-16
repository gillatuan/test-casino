import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { checkRoleToOnboard } from '@/utils/general'

export const withCheckRoleOnboard = (WrappedComponent: FC<any>) => (props: any) => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      router.push('/profile')
    } else {
      if (router.pathname === '/' || router.pathname === '/signup' || router.pathname === '/login') {
        return
      } else {
        router.push('/login')
      }
    }
  }, [])

  return <WrappedComponent {...props} />
}
