import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Header, BackToHome } from '../styles/components/Layout'

interface LayoutProps {
  home: boolean
}

const name = 'Eduardo SO'
export const siteTitle = 'Eduardo Souza de Oliveira'

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <Image
              src="/images/profile.png"
              alt={name}
              height={140}
              width={140}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src="/images/profile.png"
                  alt={name}
                  height={110}
                  width={110}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  )
}

export default Layout
