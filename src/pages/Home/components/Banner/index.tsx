import { BannerContainer, BoxContent, BoxInfo, BoxYellowWave } from './styles'

import tabuaTemperoCoracao from '../../../../assets/tabua-temperos-coracao.svg'
import ondaAmarela from '../../../../assets/onda-amarela.svg'

export function Banner() {
  return (
    <BannerContainer>
      <BoxContent>
        <BoxInfo>
          <h2>
            Transforme seus pratos em verdadeiras obras-primas gastronômicas
          </h2>

          <p>
            Nossos temperos tem qualidade, e o toque secreto que vai encantar o
            seu paladar!
          </p>

          <button>Entre em Contato</button>
        </BoxInfo>

        <img
          src={tabuaTemperoCoracao}
          alt="Tabua de coração com legumes e temperos cortados em cima"
        />
      </BoxContent>

      <BoxYellowWave>
        <img src={ondaAmarela} alt="" />
      </BoxYellowWave>
    </BannerContainer>
  )
}
