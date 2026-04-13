import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

return (
<div className="container">

<h1>Movie Review System</h1>

<button onClick={() => navigate("/register")}>
Register
</button>

<br/><br/>

<button onClick={() => navigate("/login")}>
Login
</button>

</div>
);
}

export default Home;