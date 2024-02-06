import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
       <ul className="nav justify-content-center">
        <li className="nav-item">
          {/* link from Home */}
          <Link className="nav-link" to="/">
               Home
          </Link>
        </li>
        <li className="nav-item">
            { /* link for signup */}
            <Link  className="nav-link" to="/signup">
                Signup
            </Link>
        </li>
        <li className="nav-item">
            { /* link for signin */}
            <Link  className="nav-link" to="/signin">
                Signin
            </Link>
        </li>
        <li className="nav-item">
            { /* link for technologies */}
            <Link  className="nav-link" to="/technologies">
                Technologies
            </Link>
        </li>
       </ul>
   )
}
export default Navbar;