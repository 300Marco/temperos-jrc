import {
  Developer,
  FooterBox,
  FooterContainer,
  FooterWave,
  SectionFooter,
  SectionTitle,
} from './styles'

import ondaFooter from '../../assets/onda-footer.svg'
import logoTemperosJrc from '../../assets/logo-temperos-src-branco.svg'
import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <FooterContainer>
      <FooterWave>
        <img src={ondaFooter} alt="" />
      </FooterWave>

      <FooterBox>
        <img src={logoTemperosJrc} alt="" />

        <SectionFooter>
          <SectionTitle>Contato</SectionTitle>

          <div>
            <a href="#">
              <WhatsappLogo size={32} weight="light" />
            </a>
            <span>(11) 98371-8060</span>
            <span>(11) 93397-8752</span>
          </div>

          <div>
            <a href="#">
              <Envelope size={32} weight="light" />
            </a>
            <span>(11) 98371-8060</span>
          </div>
        </SectionFooter>

        <SectionFooter>
          <SectionTitle>Rede Social</SectionTitle>
          <a href="#">
            <InstagramLogo size={32} weight="light" />
          </a>
        </SectionFooter>

        <SectionFooter>
          <SectionTitle>Desenvolvido por</SectionTitle>

          <Developer>
            <a href="#">
              <WhatsappLogo size={32} weight="light" />
            </a>
            <a href="#">
              <LinkedinLogo size={32} weight="light" />
            </a>
          </Developer>
        </SectionFooter>
      </FooterBox>
    </FooterContainer>
  )
}
