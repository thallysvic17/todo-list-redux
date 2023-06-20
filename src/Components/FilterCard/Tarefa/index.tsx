import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import * as enums from '../../../utils/enums/Tarefa'

import { remover, editar } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  description: OriginalDescription,
  prioridade,
  status,
  tittle,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [EstaEditando, setEstaEditando] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (OriginalDescription.length > 0) {
      setDescription(OriginalDescription)
    }
  }, [OriginalDescription])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescription(OriginalDescription)
  }
  return (
    <S.Card>
      <S.Tittle>{tittle}</S.Tittle>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!EstaEditando}
        value={description}
        onChange={(evento) => setDescription(evento.target.value)}
      />
      <S.ActionBar>
        {EstaEditando ? (
          <>
            <S.BtnSave
              onClick={() => {
                dispatch(
                  editar({
                    description,
                    id,
                    prioridade,
                    status,
                    tittle
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BtnSave>
            <S.BtnCancelAndRemove onClick={cancelarEdicao}>
              Cancelar
            </S.BtnCancelAndRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.BtnCancelAndRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtnCancelAndRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
