import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Customer from './component/Customer';
import Test from './component/Test-set';
import Prospect from './component/Prospect-customer';
import Employee from './component/Employee';
import './App.css'

const Main = () => {
  return (
    <Router>
        <div className="navrout">
            <nav style={{ margin: 10 }}>
                <Link to='/' style={{ padding: 10 }}>
                    Customer
                </Link>

                <Link to='/Pros-customer' style={{ padding: 10 }}>
                    Prospect Customer
                </Link>
                <Link to='/Employee' style={{ padding: 10 }}>
                    Employee
                </Link>
                <Link to='/Set-Test' style={{ padding: 10 }}>
                    Set Test
                </Link>
            </nav>
            <Route path='/' exact component={Employee} />
            <Route path='/Pros-customer' component={Prospect} />
            <Route path='/Employee' component={Customer} />
            <Route path='/Set-Test' component={Test} />
        </div>
    </Router>
  )
  }
export default Main