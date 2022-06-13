import { Movie } from "./interfaces/movie";
import User from "./interfaces/user";
import mainMenu from "./utils/mainMenu";
import userLogin from "./utils/userLogin";


//TODO: user array to DB or file
var users: User[] = [];

users.push({
    id: 1,
    name: "Rubeirinho",
    password: '123',
    age: 16,
    myList: []
})

//TODO: movies list to DB or file, will be lost on restart
let movies: Movie[] = [];

/*
    * Adicionar menu:
    * Baixar filmes (Implementado!)
    * Logar usuário (Implementado!)
    o Dar avaliação (Escolher um filme e avaliacao)
    o Listar filmes com média (usar o calculateMoviesWith Average)
*/

   userLogin(users,movies);
