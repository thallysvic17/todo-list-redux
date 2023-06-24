import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BtnSave, MainContainer, Titulo } from '../../styles/Global'
import { Campo } from '../../styles/Global'
import { Formulario, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/Tarefa'

import { cadastrar } from '../../store/reducers/tarefas'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        tittle,
        prioridade,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Formulario onSubmit={cadastrarTarefa}>
        <Campo
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa "
        />

        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((Prioridade) => (
            <Opcao key={Prioridade}>
              <input
                value={prioridade}
                name="importante"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                id={Prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={Prioridade}>{Prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BtnSave>Cadastrar</BtnSave>
      </Formulario>
    </MainContainer>
  )
}

export default Form
