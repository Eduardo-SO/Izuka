import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import { Heading, BlogContainer, List } from '../styles/pages/Home'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

interface Post {
  id: string
  date?: string
  title?: string
}

interface HomeProps {
  allPostsData: Post[]
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading>
        <p>Desenvolvedor Full Stack JS/TS.</p>
      </Heading>
      <BlogContainer>
        <h2>Blog</h2>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </List>
      </BlogContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
