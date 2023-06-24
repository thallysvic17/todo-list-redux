import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../Components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enuns from '../../utils/enums/Tarefa'
import { Button, Campo } from '../../styles/Global'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filters>
              <FilterCard
                valor={enuns.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FilterCard
                valor={enuns.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FilterCard
                valor={enuns.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FilterCard
                valor={enuns.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FilterCard
                valor={enuns.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FilterCard criterio="todas" legenda="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
