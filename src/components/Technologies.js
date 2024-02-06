import React from 'react'
import {Link,Outlet} from 'react-router-dom';

function Technologies() {
    return (
        <div>
           <p className="display-2 text-center">Technologies</p>
           <ul className="nav justify-content-center">
        <li className="nav-item">
          {/* link from Reactjs */}
          <Link className="nav-link" to="reactjs">
               ReactJS
          </Link>
        </li>
        <li className="nav-item">
            { /* link for Angular */}
            <Link  className="nav-link" to="angular">
                Angular
            </Link>
        </li>
        <li className="nav-item">
            { /* link for Vue */}
            <Link  className="nav-link" to="vue">
                Vue
            </Link>
        </li>
       </ul> 

{/* place holder of childern */ }
         <Outlet />
        </div> 
    );
}
export default Technologies;