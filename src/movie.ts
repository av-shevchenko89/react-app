export interface Movie {
    id?: string;
    title: string;
    poster_path: string;
    overview: string;
    runtime: number;
    genres: string[];

    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    release_date?: string;
    budget?: number;
    revenue?: number;
}
