import {
  Drop,
  Envelope,
  Heart,
  InstagramLogo,
  Package,
  Plus,
  SealCheck,
  Truck,
  WhatsappLogo,
} from '@phosphor-icons/react'

import tempero1 from '../../assets/tempero-1.svg'
import tempero2 from '../../assets/tempero-2.svg'
import tempero3 from '../../assets/tempero-3.svg'
import tempero4 from '../../assets/tempero-4.svg'
import tempero5 from '../../assets/tempero-5.svg'
import ilustracaoReceitas from '../../assets/ilustracao-receitas.svg'
import linhaOndaAmarela from '../../assets/linha-onda-amarela.svg'
import tabuaTemperos from '../../assets/tabua-temperos-coracao-pequena.svg'

import { Banner } from './components/Banner'
import {
  HomeContainer,
  SectionOptions,
  SectionOptionsContent,
  SectionOptionsInfo,
  SectionVarieties,
  SectionVarietiesContent,
  SectionVarietiesImages,
  SectionProcesses,
  SectionProcessContent,
  SectionProcessCards,
  Card,
  Divider,
  SectionContact,
  SectionContactContent,
  SectionContentInfo,
  CardContent,
  CardInfo,
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

      <SectionProcesses>
        <SectionProcessContent>
          <h2>
            Todos os temperos passam por um processo profissional de embalagem
            para venda
          </h2>

          <p>
            Damos prioridade em todos os processos desde a higienização há
            embalagem do produto, para que os temperos cheguem bem cuidados até
            você
          </p>
        </SectionProcessContent>

        <SectionProcessCards>
          <Card>
            <span>
              <Package size={60} />
            </span>

            <h3>Nossas Embalagens</h3>

            <p>
              Nossos produtos são cuidadosamente embalados, garantindo que cada
              tempero chegue até você com todo o frescor e qualidade, prontos
              para elevar seus pratos a um novo patamar de sabor e aromas
              incríveis!
            </p>
          </Card>

          <Card>
            <span>
              <Drop size={60} />
            </span>

            <h3>Cuidado e preocupação na higiene dos produtos</h3>

            <p>
              Nossa prioridade é a sua segurança e bem-estar! Por isso, cada um
              dos nossos produtos é produzido e embalado com rigorosos padrões
              de higiene, garantindo que você desfrute de temperos de qualidade,
              sem preocupações.
            </p>
          </Card>

          <Card>
            <span>
              <Truck size={60} />
            </span>

            <h3>Transporte Rápido</h3>

            <p>
              Garantimos um transporte seguro e eficiente para que nossos
              produtos cheguem até você em perfeitas condições, preservando toda
              a qualidade e frescor dos nossos temperos.
            </p>
          </Card>
        </SectionProcessCards>
      </SectionProcesses>

      <Divider>
        <img src={linhaOndaAmarela} alt="" />
      </Divider>

      <SectionContact>
        <h2>Entre em contato agora e solicite já, seus temperos</h2>

        <SectionContactContent>
          <SectionContentInfo>
            <CardContent>
              <CardInfo flexStart>
                <WhatsappLogo size={40} />

                <div>
                  <span>(11) 98371-8060</span>
                  <span>(11) 93397-8752</span>
                </div>
              </CardInfo>

              <a href="#">Enviar Mensagem</a>
            </CardContent>

            <CardContent>
              <CardInfo>
                <InstagramLogo size={40} />
                <span>@jrc_temperos</span>
              </CardInfo>

              <a href="#">Acessar Perfil</a>
            </CardContent>

            <CardInfo flexColumn>
              <Envelope size={40} />

              <span>jairoliveira361517@gmail.com</span>
            </CardInfo>
          </SectionContentInfo>

          <img src={tabuaTemperos} alt="" />
        </SectionContactContent>
      </SectionContact>
    </HomeContainer>
  )
}
