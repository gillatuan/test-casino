import Image from 'next/image'
import React, { useEffect } from 'react'
import Logo from '/public/next.svg'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useGetData } from '@/api/common'

const HeaderLogo = () => {
  const router = useRouter()
  let token: string | null
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem('access_token')
  }
  const { isLoading, isError, data, error } = useQuery(`me`, ({ signal }) =>
    useGetData(`/membership-service/1.2.0/users/me`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  )

  useEffect(() => {
    if (data?.data?.data && data?.data?.data.memberships) {
      localStorage.setItem('org_token', data?.data?.data.memberships[0].token)
    }
  }, [data])

  return (
    <div className='flex items-center justify-between w-full h-[84px] px-[35px]'>
      <div className='flex items-center'>
        <Image
          onClick={() => router.push('/')}
          src={Logo}
          alt='Logo'
          className='w-[160px] h-[32px] cursor-pointer hover:opacity-75'
        />
      </div>
    </div>
  )
}

export default HeaderLogo
