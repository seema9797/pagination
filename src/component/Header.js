import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="hed-des">
    <nav>
      <ul>
        <li><Link to='/'>Customer</Link></li>
        <li><Link to='/Prospect-customer'>Prospect-customer</Link></li>
        <li><Link to='/Employee'>Employee</Link></li>
        <li><Link to='/Test-Set'>Test Set</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header