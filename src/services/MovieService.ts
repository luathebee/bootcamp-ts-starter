import loadMovies from "../utils/loadMovies";
import BaseService from "./BaseService";

interface MoviesFromApiDTO {
    id: number,
    title: string,
    duration: number,
    directed_by: string,
}

interface RespostaApiFilmes {
    data: MoviesFromApiDTO[]
}

class MovieService extends BaseService{
    
    constructor() {
        super ()
    }
    
    
    async listAll() {
        const result = await this.getInstance().get<RespostaApiFilmes>("/movies")
        const movies = result.data.data
        
        return loadMovies(movies)
                
    }

}

export default MovieService;