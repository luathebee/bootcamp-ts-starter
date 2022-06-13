import MovieService from "../services/MovieService";
import inquirer from "inquirer"
import { mainQuestions,
        addMoviesToListQuestion} from "../questions/question";
import User from "../interfaces/user";
import { Movie } from "../interfaces/movie";
import calculateMoviesAverage from "./calculateMoviesAverage";
import rateMovie from "./rateMovie";
import printMovies from "./printMovies";

async function mainMenu(loggedUser: User, moviesFromDB: Movie[]) {
    var exit = 0;
    let movies = moviesFromDB;

    while (!exit){

        const answers = await inquirer.prompt(mainQuestions);

        var movieService = new MovieService();

        const menuAnswers = {
            DOWNLOAD: '1',
            RATE_MOVIE: '2',
            ADD_MOVIES_TO_LIST: '3',
            PRINT_RATED_MOVIES: '4',
            EXIT: '5'
        };

        switch(answers.option) {

            case menuAnswers.DOWNLOAD:
                if (movies.length === 0){
                    console.log(movies,typeof movies)
                    movies = await movieService.listAll();
                }
                printMovies(movies);
                /*movies.forEach(movie => {
                    console.log(movie.id + " - " + movie.title)
                }); */


            break;

            case menuAnswers.RATE_MOVIE:
                rateMovie(movies);
                break;

            case menuAnswers.ADD_MOVIES_TO_LIST:
                const addMoviesToListAnswer = await inquirer.prompt(addMoviesToListQuestion)
                console.log(addMoviesToListAnswer)
                break;
                
            case menuAnswers.PRINT_RATED_MOVIES:
                calculateMoviesAverage(movies).forEach(movie => {
                    console.log(movie.title + '\n Media: ' + movie.average);
                });
                break;

            case menuAnswers.EXIT:
                exit = 1;
                console.log("Finalizando...")
                break;

        }
    }
}

export default mainMenu;