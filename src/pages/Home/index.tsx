import { Banner } from './components/Banner'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <h3>Conteúdo do site</h3>
    </HomeContainer>
  )
}
