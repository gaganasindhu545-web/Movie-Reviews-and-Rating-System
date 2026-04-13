import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const [login,setLogin]=useState({
email:"",
password:""
})

const navigate=useNavigate();

const handleChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value});
}

const loginUser=async()=>{

const res=await axios.post("http://localhost:5000/api/auth/login",login);

if(res.data.message==="Login Successful"){
navigate("/movies");
}
else{
alert("Invalid Login");
}

}

return(
<div className="container">

<h2>Login</h2>

<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="password" type="password" placeholder="Password" onChange={handleChange}/>

<button onClick={loginUser}>Login</button>

</div>
)

}

export default Login;