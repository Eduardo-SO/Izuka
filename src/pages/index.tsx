import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getSortedPostsData } from '../lib/posts'
import { BlogContainer, List } from '../styles/pages/Home'
import Layout from '../components/layout'
import Date from '../components/date'
import Profile from '../components/profile'
import CustomLink from '../components/customLink'

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
        <title>Eduardo Souza de Oliveira</title>
      </Head>
      <Profile />
      <BlogContainer>
        <h2>Blog</h2>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <CustomLink href={`/posts/${id}`}>
                <h3>{title}</h3>
                <small>
                  <Date dateString={date} />
                </small>
              </CustomLink>
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
