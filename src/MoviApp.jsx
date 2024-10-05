import "./MovieApp.css"
import { useState } from "react"

export const MoviApp=()=>{

const [search, setSearch] = useState("")
const [movieList, setMoviesList] = useState(null)

const urlBase="https://api.themoviedb.org/3/search/movie?"
const API_KEY ="94da45550a7c00f17ba70b5fd80de642"

const handleInputChange = ({target}) =>{
    setSearch(target.value)
   
    
}

const handlenSubmit=(event)=>{
    event.preventDefault()
    fetchMovies()
}

const fetchMovies=async()=>{
    try{
        const response=await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}&language=es-ES`)
        const data=await response.json()
        setMoviesList(data.results)
        

    }catch(error){
        console.error(`Ha ocurrido el siguiente error:`,error)

    }

}

    return (
        <div className="container">
            <h1>Buscador de Películas</h1>
            <form onSubmit={handlenSubmit}>
                <input type="text" 
                placeholder="Escribir una película"
                value={search}
                onChange={handleInputChange}
                />

                <button>Buscar</button>
            </form>

            {movieList &&
            <div className="movie-list">

                {movieList.map(movie=>(
                    <div key={movie.id}className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <h2>{movie.litle}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))}
                
        </div>
    }

    </div>
    )
}
