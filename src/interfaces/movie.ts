import IndicativeRating from "../enums/indicativerating";

export interface Movie {
    title: string;

    ratings: number[];

    id: number;

    duration: number;

    directed_by: string;
}