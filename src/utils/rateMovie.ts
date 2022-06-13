import inquirer from "inquirer";
import { Movie } from "../interfaces/movie";
import { chooseMovieQuestions, rateQuestions } from "../questions/question";

                
async function rateMovie(movies: Movie[]){    
    let movieId: Number;
    let rate;

    try{
        const chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
            movieId = chooseMovieAnswers.option;

        const rateAnswers = await inquirer.prompt(rateQuestions);
        rate = rateAnswers.option;

        const movieToRateIndex = movies.findIndex((movie) => movie.id == movieId)
        movies[movieToRateIndex].ratings.push(rate);

        console.log("Filme Avaliado com Sucesso!")
    }
    catch(error){
        console.error(error)
        console.log("Nao foi possivel avaliar o filme.")
    }
    
}

export default rateMovie;