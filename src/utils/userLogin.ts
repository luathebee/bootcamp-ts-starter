
import inquirer from "inquirer"
import User from "../interfaces/user";
import { loginPasswordQuestion,
         loginUserQuestion} from "../questions/question";
import mainMenu from "./mainMenu";



async function userLogin(users: User[]) {
    console.log("Boas Vindas!")
    while(1){
        const promptLogin = await inquirer.prompt(loginUserQuestion);
        //console.log(promptLogin.option);
        const promptPassword = await inquirer.prompt(loginPasswordQuestion);
        //console.log(promptPassword.option);
        const foundUser = users.find(user => user.id == promptLogin.option)
        if (foundUser){
            if (foundUser.password == promptPassword.option){
                console.log('Boas vindas ' + foundUser.name + '!')
                await mainMenu();
            }
            else(console.log("Senha incorreta!"))
        }
        else{console.log("Usuário não encontrado.")}
    }

}

export default userLogin;