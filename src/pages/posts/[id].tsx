import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { Container, DateContainer } from '../../styles/pages/Posts'

interface ParamPostId {
  params: {
    id: string
  }
}

interface Post {
  postData: {
    id: string
    title?: string
    date?: string
    contentHtml: string
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: ParamPostId) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

const Post: React.FC<Post> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <h1>{postData.title}</h1>

        <DateContainer>
          <Date dateString={postData.date} />
        </DateContainer>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}

export default Post
