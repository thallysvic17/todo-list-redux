import { Provider } from 'react-redux' //estados do redux
import store from './store' //estados redux
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //routes
import GlobalStyle, { Container } from './styles/Global' // GLobalstyle
//routes
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
