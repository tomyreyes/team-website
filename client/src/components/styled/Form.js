import styled from 'styled-components'

export const FormTitle = styled.h1`
  font-weight: normal;
  font-size: 2.8rem;
  color: #52d95b;
  margin-bottom: 0.8rem;
`
export const FormContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  font-family: 'Source Code Pro', monospace;
  margin-top: 6.25rem;
  border: 4px solid #52d95b;
  border-radius: 2px;
  box-shadow: 0px 5px 38px 4px #52d95b;
  width: 45%;
  height: 45%;
`
export const FormLabel = styled.label`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  font-family: 'Source Code Pro', monospace;
  color: #fff;
  font-size: 1.8rem;
`
export const FormButton = styled.button`
  background-color: #52d95b;
  color: #fff;
  border-radius: 3px;
  border: 1px #000;
  cursor: pointer;
  &:hover {
    background-color: #358c3b;
  }
  ${FormLabel} {
    cursor: pointer;
  }
`

export const Form = styled.form`
  /* margin-left: 0.4rem; */
  & ${FormButton} {
    text-align: center;
  }
`

export const ErrorLabel = styled.div`
  font-size: 1.2rm;
  color: red;
`

export const FormInput = styled.input`
  color: #52d95b;
  background: #000;
  border: none;
  font-size: 1.4em;
  width: 15rem;
  margin-bottom: 25px;
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
