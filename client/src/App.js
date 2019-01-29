import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Home />} />
            <Route path="/login" render={props => <Login />} />
            <Route path="/sign-up" render={props => <SignUp />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
