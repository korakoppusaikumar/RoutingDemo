 import React from 'react'
 import "./Adduser.css";
 import{ useForm} from "react-hook-form";
   

 function Adduser() {
    let {
        register,
        handlesubmit,
        formState:{ errors},
    } =useForm();


    return <div>
        <p className="dispaly-3 text-center">Add New User</p>
        { /* responsive form */}
        <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
                

            </div>

        </div>
    </div>
 }

 export default  Adduser;