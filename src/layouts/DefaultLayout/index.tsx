import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <h3>Conteúdo do site</h3>
    </LayoutContainer>
  )
}
