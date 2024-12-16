import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666;

  textarea {
    margin: 16px 0;
    resize: none;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-right: 6px;
  }

  label {
    margin-right: 16px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
