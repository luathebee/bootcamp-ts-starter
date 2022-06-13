import MovieService from "../services/MovieService";
import inquirer from "inquirer"
import { mainQuestions,
        chooseMovieQuestions,
        rateQuestions, 
        addMoviesToListQuestion} from "../questions/question";
import userLogin from "./userLogin";
import User from "../interfaces/user";
import { Movie } from "../interfaces/movie";
import calculateMoviesAverage from "./calculateMoviesAverage";

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

                console.log(movies,typeof movies)
                movies = await movieService.listAll();
                console.log("Filmes Atualizados!: ")
                console.log(movies);

            break;

            case menuAnswers.RATE_MOVIE:
                let movieId: Number;
                let rate;

                const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
                 movieId = chooseMovieAnswers.option;

                const rateAnswers = await inquirer.prompt(rateQuestions);
                rate = rateAnswers.option;

                const movieToRateIndex = movies.findIndex((movie) => movie.id == movieId)
                movies[movieToRateIndex].ratings.push(rate);
                
                console.log(movieId, rate, movies[movieToRateIndex].ratings);

                break;
            case menuAnswers.ADD_MOVIES_TO_LIST:
                const addMoviesToListAnswer = await inquirer.prompt(addMoviesToListQuestion)
                console.log(addMoviesToListAnswer)
                
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