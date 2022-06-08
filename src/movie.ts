import IndicativeRating from "./indicativerating";

export interface Movie {
    name: string;

    ratings: number[];

    indicativeRating: IndicativeRating;

    id: number;
}