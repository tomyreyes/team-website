import React, { Component } from 'react'
import FormValidation from '../utils/FormValidation'

export default class SignUpForm extends Component {
  constructor() {
    super()
    this.validator = new FormValidation([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Your name is required.'
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required.'
      },
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
        message: 'Password is required.'
      },
      {
        field: 'password',
        method: this.characterCheck,
        validWhen: true,
        message: 'Password must contain at least 6 characters.'
      },
      {
        field: 'passwordConfirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password confirmation is required.'
      },
      {
        field: 'passwordConfirmation',
        method: this.passwordMatch,
        validWhen: true,
        message: 'Password and password confirmation do not match.'
      }
    ])

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      validation: this.validator.valid()
    }

    this.submitted = false
  }

  passwordMatch = (confirmation, state) => state.password === confirmation

  characterCheck = state => state.length >= 6

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
      console.log('tis working')
    }
  }

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    const { messageSuccess } = this.state
    return (
      <form name="sign-up" onSubmit={this.handleFormSubmit}>
        <div className="field half first">
          <label htmlFor="name">
            Name <span className="required-field">*</span>
          </label>

          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleInputChange}
          />
          <span className="error">{validation.name.message}</span>
        </div>
        <div className="field half">
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
            Password<span className="required-field">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInputChange}
          />
          <span className="error">{validation.password.message}</span>
        </div>
        <div className="field">
          <label htmlFor="password">
            Password Confirmation<span className="required-field">*</span>
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            onChange={this.handleInputChange}
          />
          <span className="error">
            {validation.passwordConfirmation.message}
          </span>
        </div>
        <button type="submit" className="special">
          Sign Up
        </button>
      </form>
    )
  }
}
