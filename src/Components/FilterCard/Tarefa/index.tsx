import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar, alteraStatus } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'
import { BtnSave, Button } from '../../../styles/Global'
import * as enums from '../../../utils/enums/Tarefa'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }
  return (
    <S.Card>
      <label htmlFor={tittle}>
        <input type="checkbox" id={tittle} onChange={alteraStatusTarefa} />

        <S.Tittle>
          {EstaEditando && <em>Editando: </em>}
          {tittle}
        </S.Tittle>
      </label>
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
            <BtnSave
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
            </BtnSave>
            <S.BtnCancelAndRemove onClick={cancelarEdicao}>
              Cancelar
            </S.BtnCancelAndRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
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
