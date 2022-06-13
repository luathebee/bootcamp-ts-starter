import MovieService from "../services/MovieService";
import inquirer from "inquirer"
import { mainQuestions,
        chooseMovieQuestions,
        rateQuestions, 
        addMoviesToListQuestion} from "../questions/question";
import userLogin from "./userLogin";
import User from "../interfaces/user";
import { Movie } from "../interfaces/movie";

async function mainMenu(loggedUser: User, moviesFromDB: Movie[]) {
    var exit = 0;
    let movies = moviesFromDB;

    while (!exit){

        const answers = await inquirer.prompt(mainQuestions);

        var movieService = new MovieService();

        const possibleAnswers = {
            DOWNLOAD: '1',
            RATE_MOVIE: '2',
            ADD_MOVIES_TO_LIST: '3',
            EXIT: '4'
        };

        switch(answers.option) {

            case possibleAnswers.DOWNLOAD:

                console.log(movies,typeof movies)
                movies = await movieService.listAll();
                console.log("Filmes Atualizados!: ")
                console.log(movies);

            case possibleAnswers.RATE_MOVIE:
                let movieId;
                let rate;

                const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
                movieId = chooseMovieAnswers.option;

                const rateAnswers = await inquirer.prompt(rateQuestions);
                rate = rateAnswers.option;

                console.log(movieId, rate);

                break;
            case possibleAnswers.ADD_MOVIES_TO_LIST:
                const addMoviesToListAnswer = await inquirer.prompt(addMoviesToListQuestion)
                console.log(addMoviesToListAnswer)
                

                break;
            case possibleAnswers.EXIT:
                exit = 1;
                console.log("Finalizando...")
                break;
        }
    }
}

export default mainMenu;