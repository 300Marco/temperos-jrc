import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { Home } from '../../pages/Home'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
      <Footer />
    </LayoutContainer>
  )
}
