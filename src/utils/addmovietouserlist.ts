import { Movie } from "../interfaces/movie";
import User from "../interfaces/user";

function addMovieToUserList(movie: Movie, user: User): void {
    user.myList = [
        ...user.myList,
        movie,
    ]
}

export default addMovieToUserList;