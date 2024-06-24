import DefaultPicture from '../../assets/profile.png'
import JohnDoe from '../../assets/john-doe.jpg'
import Card from '../../components/Card'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: JohnDoe
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture
  }
]

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          name={profile.name}
          picture={profile.picture}
          title={profile.title}
        />
      ))}
    </div>
  )
}

export default Freelances
