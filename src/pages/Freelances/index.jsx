import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { Loader } from '../../utils/Loader';

import { useFetch } from '../../utils/hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  margin: 24px;
  grid-auto-rows: 350px;
  grid-template-columns: repeat(2, 1fr);
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.blackTitle};
`;

const Subtitle = styled.h2`
  font-size: 1.25em;
  color: ${colors.secondary};
`;

function Freelances() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  const { freelancersList } = data;

  if (error) {
    return (
      <Container>
        <span>🛠️ Oups... ça coince quelque part 🔧</span>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Trouvez votre prestataire</Title>
      <Subtitle>
        Chez Shiny, nous réunissons les meilleurs profils pour vous.
      </Subtitle>

      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList &&
            freelancersList.map((profile) => (
              <Card
                key={`${profile.id}`}
                job={profile.job}
                name={profile.name}
                picture={profile.picture}
              />
            ))}
        </CardsContainer>
      )}
    </Container>
  );
}

export default Freelances;
