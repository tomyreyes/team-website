import styled from 'styled-components'

export const FormTitle = styled.h1`
  font-size: 3em;
  color: #fff;
`
export const FormContainer = styled.section`
  margin-top: 100px;
  border: 4px solid #29b725;
  width: 700px;
  height: 400px;
  & ${FormTitle} {
    text-align: center;
  }
`

export const FormButton = styled.button`
  height: 40px;
  background-color: #29b725;
  color: #fff;
`

export const FormLabel = styled.label`
  color: #fff;
  font-size: 1.8em;
`
