import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Movies from "./components/Movies";

import "./style.css";

function App() {

return (
<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/movies" element={<Movies />} />

</Routes>

</BrowserRouter>
);

}

export default App;