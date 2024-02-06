import React from 'react'
function Signup() {
    return (
        <div>
            <p className="display-2 text-center">Signup</p>
            <div className="row">
            <div className="col-11 col-sm-6 mx-auto">
            <form> 
            <div className="mb-3"> 
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" className="form-contol"/>
             </div>
             <div className="mb-3"> 
            <label htmlFor="name">Email</label>
            <input type="email" name="" id="name" className="form-contol"/>
             </div>
             <div className="mb-3"> 
            <label htmlFor="name">Date of birth</label>
            <input type="date" name="" id="name" className="form-contol"/>
             </div>
            
             <button className="btn-success">Register</button>
             </form>
             </div>

             </div>
        </div>
    )
}
export default Signup