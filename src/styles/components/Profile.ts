import styled from 'styled-components'

export const Container = styled.div`
  padding: 6rem;
  border-radius: 0.4rem;

  background-image: radial-gradient(
    farthest-side at 0% 0%,
    #001223,
    transparent
  );

  @media (max-width: 980px) {
    padding: 4rem;
  }
`

export const Content = styled.div`
  h1 {
    line-height: 100%;
    font-size: 4.8rem;
    margin: 0 0 0.8rem;
  }

  h2 {
    font-size: 2.4rem;
    color: #0082fa;
    margin-right: 1.6rem;
  }

  p {
    color: #9b9b9b;
    margin: 4rem 0;
  }

  @media (max-width: 980px) {
    h1 {
      line-height: 100%;
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
  height: 22.2rem;
  width: 22.2rem;
  margin-bottom: 6.4rem;

  img {
    border-radius: 50%;
  }

  @media (max-width: 980px) {
    height: 16rem;
    width: 16rem;
    margin-bottom: 4.8rem;
  }
`

export const SocialContainer = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 700;

    svg {
      margin-right: 0.8rem;
    }
  }

  a:first-child {
    margin-right: 2.4rem;
  }

  @media (max-width: 980px) {
    flex-direction: column;

    a:first-child {
      margin-bottom: 0.8rem;
    }
  }
`
