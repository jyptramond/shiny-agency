import colors from '../../utils/style/colors';
import illustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import { StyledLink } from '../../utils/Atoms';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.section};
  padding: 60px 90px;
  display: flex;
  gap: 50px;
  flex-direction: row;
  max-width: 1200px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 180px;
  }
`;

const Title = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

const Illustration = styled.img`
  flex: 1;
  width: 100%;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <Title>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </Title>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={illustration} alt="illustration accueil" />
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
