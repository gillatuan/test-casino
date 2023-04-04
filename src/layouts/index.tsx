import { FooterPage } from './Footer'
import Wrapper from './Wrapper'

const MainLayout = (props: { children: JSX.Element }) => {
  const { children } = props

  return <Wrapper>{children}</Wrapper>
}

export default MainLayout
