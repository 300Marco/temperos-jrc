import { FooterContainer, FooterWave } from './styles'

import ondaFooter from '../../assets/onda-footer.svg'

export function Footer() {
  return (
    <FooterContainer>
      <FooterWave>
        <img src={ondaFooter} alt="" />
      </FooterWave>

      <h3>Footer</h3>
    </FooterContainer>
  )
}
