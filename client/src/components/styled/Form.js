import styled from 'styled-components'

export const FormTitle = styled.h1`
  font-weight: normal;
  font-size: 3em;
  color: #52d95b;
`
export const FormContainer = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  font-family: 'Source Code Pro', monospace;
  margin-top: 100px;
  border: 4px solid #52d95b;
  border-radius: 2px;
  box-shadow: 0px 5px 38px 4px #52d95b;
  width: 700px;
  height: 400px;
  ${FormTitle} {
    text-align: center;
  }
`

export const FormButton = styled.button`
  height: 40px;
  background-color: #52d95b;
  color: #fff;
`

export const Form = styled.form`
  margin-left: 30px;
  & ${FormButton} {
    text-align: center;
  }
`

export const FormLabel = styled.label`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  font-family: 'Source Code Pro', monospace;
  color: #fff;
  font-size: 1.8em;
`
export const ErrorLabel = styled.div`
  font-size: 1.4em;
  color: red;
`

export const FormInput = styled.input`
  color: #52d95b;
  background: #000;
  border: none;
  font-size: 1.4em;
  margin-bottom: 10px;
  font-family: 'Source Code Pro', monospace;
  &:focus {
    border: none;
    outline-offset: 0;
    outline: none;
  }
  &:-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0 1000px #000 inset !important;
    -webkit-text-fill-color: #52d95b;
  }
  &:-internal-autofill-previewed {
    -webkit-box-shadow: 0 0 0 1000px #000 inset !important;
    -webkit-text-fill-color: #52d95b;
  }
`
