import { Movie } from "./movie";

interface User {
    id: number;
    name: string;
    password: string;
    age: number;
    myList: Movie[]
}

export default User;