import SideBar from '../../Components-Containers/SideBar'
import TodoList from '../../Components-Containers/TodoList'
import BotaoAdd from '../../Components/BotaoAdicionar'

const Home = () => (
  <>
    <SideBar mostrarFiltros={true} />
    <TodoList />
    <BotaoAdd />
  </>
)

export default Home
