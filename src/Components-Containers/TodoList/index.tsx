import { useSelector } from 'react-redux/es/exports'

import Tarefa from '../../Components/FilterCard/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.tittle.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefas marcados como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.tittle}>
            <Tarefa
              id={t.id}
              description={t.description}
              tittle={t.tittle}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
