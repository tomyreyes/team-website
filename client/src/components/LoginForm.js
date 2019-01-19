import React, { Component } from 'react'
import FormValidation from '../utils/FormValidation'

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
      messageSuccess: false
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
    const { email, password, messageSuccess } = this.state
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true
    if (validation.isValid) {
      console.log('working')
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    const { messageSuccess } = this.state
    return (
      <form name="login" onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="email">
            Email <span className="required-field">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleInputChange}
          />
          <span className="error">{validation.email.message}</span>
        </div>
        <div className="field">
          <label htmlFor="password">
            password <span className="required-field">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInputChange}
          />
          <span className="error">{validation.password.message}</span>
        </div>
        <button type="submit" className="special">
          LoginForm
        </button>
      </form>
    )
  }
}
