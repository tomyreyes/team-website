import React, { Component } from 'react'
import FormValidation from '../utils/FormValidation'
import axios from 'axios'
import { FormContainer, FormButton, FormLabel, FormTitle } from './styled/Form'
export default class LoginForm extends Component {
  constructor() {
    super()
    this.validator = new FormValidation([
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'You must enter in a password'
      }
    ])

    this.state = {
      email: '',
      password: '',
      validation: this.validator.valid(),
      errorMessage: null,
      serverResponse: null
    }

    this.submitted = false
  }

  handleInputChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true
    if (validation.isValid) {
      axios
        .post('http://localhost:5000/user/login', {
          email,
          password
        })
        .then(res => {
          this.setState({ serverResponse: res.data.message })
        })
        .catch(err => {
          this.setState({ serverResponse: err.message })
        })
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    const { serverResponse } = this.state
    return (
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <form name="login" onSubmit={this.handleFormSubmit}>
          <div>
            <FormLabel htmlFor="email">
              Email <span className="required-field">*</span>
            </FormLabel>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleInputChange}
            />
            <span className="error">{validation.email.message}</span>
          </div>
          <div className="field">
            <FormLabel htmlFor="password">
              password <span className="required-field">*</span>
            </FormLabel>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleInputChange}
            />
            <span className="error">{validation.password.message}</span>
          </div>
          <FormButton type="submit" className="special">
            <FormLabel>Submit</FormLabel>
          </FormButton>
          <span>{serverResponse}</span>
        </form>
      </FormContainer>
    )
  }
}
