import { Movie } from "../interfaces/movie";

// Data transfer object - Transitory Data
interface MoviesFromApiDTO {
    id: number,
    title: string,
    duration: number,
    directed_by: string,
    ratings?: number[]
}




function loadMovies(data: MoviesFromApiDTO[]): Movie[] {
    return data.map((movie:MoviesFromApiDTO) => ({
        id: movie.id,
        title: movie.title,
        directed_by: movie.directed_by,
        duration: movie.duration,
        ratings: []
       }))
}

export default loadMovies;