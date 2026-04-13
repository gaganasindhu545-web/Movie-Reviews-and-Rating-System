import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const [user,setUser]=useState({
username:"",
email:"",
password:""
});

const navigate = useNavigate();

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
}

const register=async()=>{
await axios.post("http://localhost:5000/api/auth/register",user);
alert("Registered Successfully");
navigate("/login");
}

return(
<div className="container">
<h2>Register</h2>

<input name="username" placeholder="Username" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="password" type="password" placeholder="Password" onChange={handleChange}/>

<button onClick={register}>Register</button>

</div>
)

}

export default Register;