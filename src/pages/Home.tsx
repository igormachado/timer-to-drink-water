import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Modal } from '../components/Modal'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Main />
        {/* <Modal /> */}
      </HomeContainer>
    </>
  )
}
