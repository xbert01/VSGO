import { useState, useEffect } from "react";
import Movie from "./Movie"

const Movies = () => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("https://data-imdb1.p.rapidapi.com/titles/tt0000002?info=mini_info", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key": "cf635bc67cmsh00fb04c6ef7cc45p17cc80jsnd519e227e66f"
        }
    })
    .then(response => response.json())
          .then(data => { 
            console.log(data);
              setMovies(data.results);
            })
         })  
    .catch(err => {
        console.error(err);
    },[]);
  
    return (
        <div id="movies">
            {movies.length > 0 &&
                movies.map((movie) => 
                    <Movie key={movie.id} data={movie} />
            )}
        </div>
)

}

export default Movies