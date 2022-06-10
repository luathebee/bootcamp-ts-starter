import IndicativeRating from "../enums/indicativerating";

export interface Movie {
    name: string;

    ratings: number[];

    id: number;

    duration: number;

    directedBy: string;
}