import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import Logo from '/public/next.svg'
import UserIcon from '/public/user.svg'
import { useRouter } from 'next/router'

type Props = {}

const Header = (props: Props) => {
  const router = useRouter()

  return (
    <div className='flex items-center justify-between w-full h-[84px] bg-white border border-light-gray px-[35px]'>
      <div className='flex items-center'>
        <Image
          onClick={() => router.push('/')}
          src={Logo}
          alt='Logo'
          className='w-[160px] h-[32px] cursor-pointer hover:opacity-75'
        />
        <div className='w-[1px] h-10 bg-light-gray ml-[35px]' />
      </div>

      <div onClick={() => router.push('/login')} className='flex items-center cursor-pointer gap-x-2 hover:opacity-75'>
        <Image src={UserIcon} alt='User' />
        <span className='text-[13px] text-black-primary'>Sign Up/Log In</span>
      </div>
    </div>
  )
}

export default Header
