import { MainContainer, Titulo } from '../../styles/Global'
import { Campo } from '../../styles/Global'
import { Formulario } from './styles'

const Form = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Formulario>
      <Campo type="text" placeholder="Titulo" />
      <Campo as="textarea" placeholder="Descricao da tarefa " />

      <div>
        <p>Prioridade</p>
        <label htmlFor="urgente">Urgente</label>
        <input name="importante" type="radio" id="urgente" />

        <label htmlFor="importante">Importante</label>
        <input name="importante" type="radio" id="importante" />

        <label htmlFor="normal">Normal</label>
        <input name="importante" type="radio" id="normal" />
        <button type="submit">Cadastrar</button>
      </div>
    </Formulario>
  </MainContainer>
)

export default Form
