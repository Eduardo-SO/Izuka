import styled from 'styled-components'

export const BlogContainer = styled.section`
  h2 {
    font-size: 4.8rem;
    margin: 1.6rem 6rem;

    @media (max-width: 980px) {
      margin: 0.8rem 4rem;
    }
  }
`

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    margin: 0 0 1.6rem;

    a {
      flex: 1;
      border: 1px solid #0075ff30;
      border-radius: 4px;
      padding: 1.6rem 6rem;

      transition: border 0.2s;

      h3 {
        margin-bottom: 0.8rem;
        line-height: 100%;
      }

      small {
        color: #999;
        text-decoration: none;
      }

      &:hover {
        border: 1px solid #0075ff;
        text-decoration: none;
      }

      @media (max-width: 980px) {
        padding: 1.6rem 4rem;
      }
    }
  }
`
