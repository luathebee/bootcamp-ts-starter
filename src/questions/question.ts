export const mainQuestions = [
    {
        type: "input",
        name: "option",
        message: "Digite uma opção: \n 1 - Baixar \n 2 - Dar Avaliação \n 3 - Adicionar Filme à Lista do Usuário \n 4 - Sair",
    }
]

export const chooseMovieQuestions = [
    {
        type: "number",
        name: "option",
        message: "Qual a Id do filme a avaliar?"
    }
]

export const rateQuestions = [
    {
        type: "number",
        name: "option",
        message: "Qual avaliacao de 0 a 10?"
    }
]


export const loginUserQuestion = [
    {
        type: "number",
        name: "option",
        message: "Para fazer login digite sua Id de Login:"
    }
]

export const loginPasswordQuestion = [
    {
        type: "password",
        name: "option",
        message: "Digite sua Senha:"
    }
]

export const addMoviesToListQuestion = [
    {
        type: "list",
        name: "option",
        message: "Digite o Id do Filme Desejado:"
    }
]
