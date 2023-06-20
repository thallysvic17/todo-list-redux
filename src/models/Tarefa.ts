import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  tittle: string
  prioridade: enums.Prioridade
  status: enums.Status
  description: string
  id: number

  constructor(
    tittle: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    description: string,
    id: number
  ) {
    this.tittle = tittle
    this.prioridade = prioridade
    this.status = status
    this.description = description
    this.id = id
  }
}

export default Tarefa
