const exp=require("express");
const app=exp();



app.listen(3500,()=>console.log("server listening in port 3500"))
//sample data for users

var user=[];
//app.set(user,'user')



// create Apis


//get users

app.get('/get-user',(request ,response)=>{
    response.send({message:"All user",payload:user})
})
// get user by id

app.get('/get-user/:id',(request,response)=>{

 let userId=request.params.id;

 let findinguser=user.find(userObj=>userObj.id===userId);
 

 response.send({message:"One user",payload:user})
 response.send("Ones user")

})
//bodt paraser
app.use(exp.json())


//create user

app.post("/create-user",(request,response)=>{

    console.log(request.body)
})


// update user

app.put("/update-user",(request,response)=>{
    response.send("User updated")
})
//delete user

app.delete("/delete-user",(request,response)=>{
    response.send("user deleted")
})
