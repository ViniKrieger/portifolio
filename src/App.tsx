import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './style'
import Sobre from './containers/Sobre'
import Projetos from './containers/projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandotemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandotemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandotemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
