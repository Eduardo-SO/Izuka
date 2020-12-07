import styled from 'styled-components'

export const Heading = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 1.5;
`

export const BlogContainer = styled.section`
  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 1.25rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  small {
    color: #999;
  }
`
