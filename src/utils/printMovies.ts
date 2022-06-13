import { Movie } from "../interfaces/movie";

function printMovies(movies: Movie[]){
    movies.forEach(movie => {
        console.log(movie.id + " - " + movie.title)
    });
}

export default printMovies;