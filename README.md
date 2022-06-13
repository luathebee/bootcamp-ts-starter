# NodeJS + Ts :camp:

Movie database manipulation system using NodeJS, inquirer, Typescript and Axios.

### Basic Code Flow
`
index.ts --> utils/userLogin.ts --> mainMenu.ts
`

### Self evaluation and ToDos

I'm still having some trouble regarding async fucntion return types, wich led to poor function calling placement and  parameter requirements. There is no data persistency regarding users and the movie DB as it requires writing to a DB or JSON file. Are Semaphores or mutexlocks required on asychronous functions?