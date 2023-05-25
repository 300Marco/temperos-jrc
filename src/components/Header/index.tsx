import { HeaderContainer, BoxImage } from './styles'

import logo from '../../assets/logo-temperos-jrc.svg'

export function Header() {
  return (
    <HeaderContainer>
      <BoxImage>
        <img src={logo} alt="" />
      </BoxImage>
    </HeaderContainer>
  )
}
