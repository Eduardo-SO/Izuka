import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  Container,
  Content,
  ImageContainer,
  SocialContainer,
} from '../styles/components/Profile'

const Profile: React.FC = () => (
  <Container>
    <Content>
      <ImageContainer>
        <Image
          src="/images/profile.png"
          alt="Eduardo Souza de Oliveira"
          width={222}
          height={222}
        />
      </ImageContainer>
      <h1>Eduardo Souza de Oliveira</h1>
      <h2>Desenvolvedor Full Stack</h2>

      <p>
        Experiência em desenvolvimento de aplicações, sites e sistemas
        utilizando React.js, React Native e Node.js
        <br />
        Empenhado em aprender sempre um pouco mais
      </p>

      <SocialContainer>
        <a href="https://github.com/Eduardo-SO">
          <FaGithub />
          Eduardo-SO
        </a>
        <a href="https://www.linkedin.com/in/eduardo-s-242652103/">
          <FaLinkedin />
          Eduardo Souza de Oliveira
        </a>
      </SocialContainer>
    </Content>
  </Container>
)

export default Profile
