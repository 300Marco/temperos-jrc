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
            <a
              href="https://api.whatsapp.com/send/?phone=5511983718060&text=Ol%C3%A1%2C+estou+vindo+pelo+site+Temperos+JRC.+Pode+me+passar+seu+cat%C3%A1logo+de+temperos+e+pre%C3%A7os%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappLogo size={40} weight="light" />
            </a>
            <span>(11) 98371-8060</span>
            <span>(11) 93397-8752</span>
          </div>

          <div>
            <Envelope size={40} weight="light" />
            <span>jairoliveira361517@gmail.com</span>
          </div>
        </SectionFooter>

        <SectionFooter>
          <SectionTitle>Rede Social</SectionTitle>
          <a
            target="_blank"
            href="https://www.instagram.com/jrc_temperos/"
            rel="noreferrer"
          >
            <InstagramLogo size={40} weight="light" />
          </a>
        </SectionFooter>

        <SectionFooter>
          <SectionTitle>Desenvolvido por</SectionTitle>

          <Developer>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5511977152733&text=Ol%C3%A1%2C+estou+vindo+pelo+site+que+voc%C3%AA+desenvolveu.+Temperos+JRC.&type=phone_number&app_absent=0"
              rel="noreferrer"
            >
              <WhatsappLogo size={40} weight="light" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marco-jsantana/"
              rel="noreferrer"
            >
              <LinkedinLogo size={40} weight="light" />
            </a>
          </Developer>
        </SectionFooter>
      </FooterBox>
    </FooterContainer>
  )
}
