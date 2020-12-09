import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

import { Container, BackToHome } from '../styles/components/Layout'

interface LayoutProps {
  home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <Container>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>
              <FaArrowLeft />
              Voltar para home
            </a>
          </Link>
        </BackToHome>
      )}
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>
              <FaArrowLeft />
              Voltar para home
            </a>
          </Link>
        </BackToHome>
      )}
    </Container>
  )
}

export default Layout
