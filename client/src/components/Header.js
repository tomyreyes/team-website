import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header id="header" className="alt">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header
