
import inquirer from "inquirer"
import { Movie } from "../interfaces/movie";
import User from "../interfaces/user";
import { loginPasswordQuestion,
         loginUserQuestion} from "../questions/question";
import mainMenu from "./mainMenu";



async function userLogin(users: User[],movies: Movie[]) {
    console.log("Boas Vindas!")
    while(1){
        const promptId = await inquirer.prompt(loginUserQuestion);
        if (isNaN(promptId.option)){
            console.log("Login inválido!\n")
            continue;
        }
        const foundUser = users.findIndex((user) => user.id == promptId.option)
        if (foundUser != -1){
            const promptPassword = await inquirer.prompt(loginPasswordQuestion);
            if (users[foundUser].password == promptPassword.option){
                console.log('\nBoas vindas ' + users[foundUser].name + '!\n')
                await mainMenu(users[foundUser],movies);           
            }
            else(console.log("Senha incorreta.\n"))
        }
        else{console.log("Usuário não encontrado.\n")}
    }

}

export default userLogin;