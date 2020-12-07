import styled from 'styled-components'

export const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 1rem 0;

    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -.05rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;

    a {
      color: inherit;
    }
  }
`

export const HeaderImage = styled.img`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;
`

export const HeaderHomeImage = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
`

export const BackToHome = styled.div`
  margin: 3rem 0 0;
`