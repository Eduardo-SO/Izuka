import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3,
  p {
    margin: 1.6rem 0px;
  }

  h1 {
    font-size: 4.8rem;
    line-height: 100%;
  }

  h2 {
    font-size: 3.2rem;
  }

  ul {
    display: block;
    list-style-type: disc;
    padding-left: 4rem;
  }
`

export const DateContainer = styled.div`
  color: #999;
`
