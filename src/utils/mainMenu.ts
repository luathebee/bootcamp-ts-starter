import MovieService from "../services/MovieService";
import inquirer from "inquirer"
import { mainQuestions,
        chooseMovieQuestions,
        rateQuestions } from "../questions/question";
import userLogin from "./userLogin";

async function mainMenu() {
    var exit = 0;
    while (!exit){

        const answers = await inquirer.prompt(mainQuestions);

        const movieService = new MovieService();

        const possibleAnswers = {
            DOWNLOAD: '1',
            RATE_MOVIE: '2',
            EXIT: '3'
        };

        switch(answers.option) {

            case possibleAnswers.DOWNLOAD:
                    const movies = await movieService.listAll();
                    console.log(movies);
                    break;
            case possibleAnswers.RATE_MOVIE:
                let movieId;
                let rate;

                const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
                movieId = chooseMovieAnswers.option;

                const rateAnswers = await inquirer.prompt(rateQuestions);
                rate = rateAnswers.option;

                console.log(movieId, rate);

                break;

            case possibleAnswers.EXIT:
                exit = 1;
                console.log("Finalizando...")
                break;
        }
    }
}

export default mainMenu;