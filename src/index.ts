import { addListener } from "process";
import { Movie } from "./interfaces/movie";
import RespostaHTTP from "./interfaces/respostahttp";
import User from "./interfaces/user";
import MovieService from "./services/MovieService";
import inquirer from "inquirer"
import { Console } from "console";
import userLogin from "./utils/userLogin";

var users: User[] = []

users.push({
    id: 1,
    name: "Rubeirinho",
    password: '123',
    age: 16,
    myList: []
})

userLogin(users);