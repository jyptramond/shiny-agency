import styled from 'styled-components'
import error404 from '../../assets/404.svg'
import colors from '../../utils/style/colors'

const Display = styled.div`
  margin: 25px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  padding: 100px 25px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const Img = styled.img`
  max-width: 800px;
  box-sizing: content-box;
  width: 50%;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
`

function Error() {
  return (
    <Display>
      <ErrorTitle>Oups...</ErrorTitle>

      <Img src={error404} alt="image erreur 404" />

      <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
    </Display>
  )
}

export default Error
