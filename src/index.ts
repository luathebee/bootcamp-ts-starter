import addMoviesViaIndex from "./addmoviesviaindex";
import filterMoviesByIndicativeRating from "./filterMoviesByIndicativeRating";
import IndicativeRating from "./indicativerating";
import { Movie } from "./movie";
import orderByAverageRate from "./orderByAverageRate";
import User from "./user";


const movies: Movie[] = [
    {
        name: 'Spider Man',
        ratings: [1, 5, 3],
        indicativeRating: IndicativeRating.AL,
        id: 1,
    },
    {
        name: 'Doctor Strange',
        ratings: [5, 5, 3],
        indicativeRating: IndicativeRating.A18,
        id: 2,
    },
    {
        name: 'Avengers',
        ratings: [],
        indicativeRating: IndicativeRating.A12,
        id: 3,
    }
];

interface Average {
    average: number;
}



const user: User = {
    name: "Rubeirinho",
    age: 16,
    myList: []
}


const orderedMovies = orderByAverageRate(movies);

const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(orderedMovies, user)

//console.log(filteredMoviesByIndicativeRating)

//console.log(user);

function addMovieToUserList(movie: Movie, user: User): void {
    user.myList = [
        ...user.myList,
        movie,
    ]
}

addMovieToUserList(
    {
        name: "Toy Story",
        ratings: [5, 5, 5],
        indicativeRating: IndicativeRating.AL,
        id: 4,
    },
    user
)


const newUserwithNewList = addMoviesViaIndex(user,movies, 1,2,3)

console.log(newUserwithNewList)


//console.log(user);

/*

Problema 1

Adicionar ao usuário um array de "minha lista" onde é possível armazenar os filmes
Criar um metodo para adicionar um filme a lista do usuário

/*

Problema 2 

    Adicionar uma propriedade ID ao filme
    
    Adicionar um método que passados os ids por rest parameter, podemos adicioná-los a lista do usuário

    Desafio: Separar em arquivos
*/


