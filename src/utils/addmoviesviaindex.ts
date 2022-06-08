import { Movie } from "../interfaces/movie";
import User from "../interfaces/user";

function addMoviesViaIndex(user: User, movies: Movie[], ...ids: number[]):User {

    const newList: Movie[] = [];
    movies.forEach(movie => {
        const isMovieInList = ids.includes(movie.id);

        if(!isMovieInList) {
            throw new Error("Filme não está na lista");
        }

        newList.push(movie);
    })

    return {
        ...user,
        myList: [
            ... user.myList,
            ... newList,
        ]
    }

}

export default addMoviesViaIndex;