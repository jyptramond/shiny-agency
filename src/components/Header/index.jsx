import styled from 'styled-components'
import logo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const StyledHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1000px;
`

const StyledLogo = styled.img`
  height: 75px;
`

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo Shiny" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledHeader>
  )
}

export default Header
