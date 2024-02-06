import React from 'react'
function Signin() {
    return (
        <div>
            <p className="display-2 text-center">Signin</p>
            <div className="row">
            <div className="col-11 col-sm-6 mx-auto">
            <form> 
            <div className="mb-3"> 
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" className="form-contol"/>
             </div>
             <div className="mb-3"> 
            <label htmlFor="name">Password</label>
            <input type="password" name="" id="name" className="form-contol"/>
             </div>
             
            
             <button className="btn-success">Login</button>
             </form> 
                </div>    
            </div>
          
        </div>
    )
}
export default Signin