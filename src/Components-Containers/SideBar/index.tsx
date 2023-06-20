import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../Components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const SideBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filters>
          <FilterCard legenda="pendentes" contador={1} />
          <FilterCard legenda="concluidas" contador={2} />
          <FilterCard legenda="urgentes" contador={3} />
          <FilterCard legenda="importantes" contador={4} />
          <FilterCard legenda="normal" contador={5} />
          <FilterCard ativo legenda="todas" contador={10} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
