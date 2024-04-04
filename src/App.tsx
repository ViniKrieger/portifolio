import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './style'
import Sobre from './containers/Sobre'
import Projetos from './containers/projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
