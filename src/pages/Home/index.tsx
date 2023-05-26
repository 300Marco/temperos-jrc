import { Heart, Plus, SealCheck } from '@phosphor-icons/react'

import tempero1 from '../../assets/tempero-1.svg'
import tempero2 from '../../assets/tempero-2.svg'
import tempero3 from '../../assets/tempero-3.svg'
import tempero4 from '../../assets/tempero-4.svg'
import tempero5 from '../../assets/tempero-5.svg'
import ilustracaoReceitas from '../../assets/ilustracao-receitas.svg'

import { Banner } from './components/Banner'
import {
  HomeContainer,
  SectionOptions,
  SectionOptionsContent,
  SectionOptionsInfo,
  SectionVarieties,
  SectionVarietiesContent,
  SectionVarietiesImages,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <SectionVarieties>
        <SectionVarietiesContent>
          <span>
            <SealCheck size={60} />
          </span>

          <h2>
            Descubra a nossa incrível variedade de temperos que se destacam em
            qualidade
          </h2>

          <p>
            Buscamos as melhores linhas, para atendê-los com produtos de
            qualidade e sabor
          </p>
        </SectionVarietiesContent>

        <SectionVarietiesImages>
          <img src={tempero1} alt="" />
          <img src={tempero2} alt="" />
          <img src={tempero3} alt="" />
          <img src={tempero4} alt="" />
          <img src={tempero5} alt="" />
        </SectionVarietiesImages>
      </SectionVarieties>

      <SectionOptions>
        <SectionOptionsContent>
          <h2>Mais sabor em suas receitas com os melhores temperos</h2>

          <SectionOptionsInfo>
            <p>
              Confiras algumas de nossas opções, para deixar seu paladar com um
              gostinho especial:
            </p>

            <ul>
              <li>
                <Heart size={32} weight="fill" /> Edu Guedes
              </li>
              <li>
                <Heart size={32} weight="fill" /> Ana Maria
              </li>
              <li>
                <Heart size={32} weight="fill" /> Olivier
              </li>
              <li>
                <Heart size={32} weight="fill" /> Gourmet
              </li>
              <li>
                <Heart size={32} weight="fill" /> Pega Marido
              </li>
              <li>
                <Heart size={32} weight="fill" /> Chimi Churrasco
              </li>
              <li>
                <Heart size={32} weight="fill" /> Alho Temperado
              </li>
              <li>
                <Plus size={32} /> Muito mais
              </li>
            </ul>
          </SectionOptionsInfo>
        </SectionOptionsContent>

        <img src={ilustracaoReceitas} alt="" />
      </SectionOptions>
    </HomeContainer>
  )
}
