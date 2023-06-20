import { Provider } from 'react-redux'
import SideBar from './Components-Containers/SideBar'
import TodoList from './Components-Containers/TodoList'
import GlobalStyle, { Container } from './styles/Global'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
