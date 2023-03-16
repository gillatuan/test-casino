import Header from '@/layouts/Header'
import Wrapper from '@/layouts/Wrapper'
import { useEffect, useState } from 'react'
import HeaderLogo from '../HeaderLogo'

const AuthenticatedLayout = (props: { children: JSX.Element }) => {
  const { children } = props

  const [isLogged, setIsLogged] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('access_token')) {
      setIsLogged(true)
    }
  }, [])

  return (
    <>
      {!isLogged && <Header />}
      {isLogged && <HeaderLogo />}
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default AuthenticatedLayout
