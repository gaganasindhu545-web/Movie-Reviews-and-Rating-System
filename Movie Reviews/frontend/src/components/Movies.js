import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY="16e0b502b16812cb8bfc564d43897aff";

function Movies(){

const [movies,setMovies]=useState([]);

useEffect(()=>{

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)

.then(res=>{
setMovies(res.data.results);
})

},[])

return(

<div className="movies">

<h1>Movies</h1>

<div className="movie-grid">

{movies.map(movie=>(

<div className="card" key={movie.id}>

<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

<h3>{movie.title}</h3>

<p>IMDb Rating : {movie.vote_average}</p>

</div>

))}

</div>

</div>

)

}

export default Movies;