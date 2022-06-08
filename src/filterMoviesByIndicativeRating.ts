import { Movie } from "./movie"
import User from "./user"

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
    return movies.filter((movie) => {
        return movie.indicativeRating <= user.age
    })
}

export default filterMoviesByIndicativeRating;