
import inquirer from "inquirer"
import User from "../interfaces/user";
import { loginPasswordQuestion,
         loginUserQuestion} from "../questions/question";
import mainMenu from "./mainMenu";



async function userLogin(users: User[]) {
    console.log("Boas Vindas!")
    while(1){
        const promptId = await inquirer.prompt(loginUserQuestion);
        if (isNaN(promptId.option)){
            console.log("Login inválido!\n")
            continue;
        }
        const foundUser = users.find(user => user.id == promptId.option)
        if (foundUser){
            const promptPassword = await inquirer.prompt(loginPasswordQuestion);
            if (foundUser.password == promptPassword.option){
                console.log('\nBoas vindas ' + foundUser.name + '!\n')
                await mainMenu();
            }
            else(console.log("Senha incorreta.\n"))
        }
        else{console.log("Usuário não encontrado.\n")}
    }

}

export default userLogin;