import JohnDoe from '../../assets/john-doe.jpg'
import JaneDoe from '../../assets/jane-doe.jpg'
import PierreMartin from '../../assets/pierre-martin.jpg'
import JulieLegrand from '../../assets/julie-legrand.jpg'
import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'Pierre Martin',
    jobTitle: 'Devops',
    picture: PierreMartin
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: JohnDoe
  },
  {
    name: 'Jane Doe',
    jobTitle: 'Développeuse Fullstack',
    picture: JaneDoe
  },
  {
    name: 'Julie Legrand',
    jobTitle: 'Développeuse FullStack',
    picture: JulieLegrand
  },

  {
    name: 'Yves Paul',
    jobTitle: 'Développeur Frontend'
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  margin: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.blackTitle};
`

const Subtitle = styled.h2`
  font-size: 1.25em;
  color: ${colors.secondary};
`

function Freelances() {
  return (
    <Container>
      <Title>Trouvez votre prestataire</Title>
      <Subtitle>
        Chez Shiny, nous réunissons les meilleurs profils pour vous.
      </Subtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            jobTitle={profile.jobTitle}
            name={profile.name}
            picture={profile.picture}
            title={profile.title}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default Freelances
