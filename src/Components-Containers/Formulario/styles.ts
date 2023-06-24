import styled from 'styled-components'

export const Formulario = styled.form`
  max-width: 547px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 8px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
