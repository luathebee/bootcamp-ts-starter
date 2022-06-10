import { Movie } from "../interfaces/movie";

interface MoviesFromApiDTO {
    id: number,
    title: string,
    duration: number,
    directed_by: string,
}


function loadMovies(data: MoviesFromApiDTO[]): Partial<Movie>[] {
    return data.map((movie) => ({
        id: movie.id,
        title: movie.title,
        directed_by: movie.directed_by,
        duration: movie.duration,
    }));
};

export default loadMovies;