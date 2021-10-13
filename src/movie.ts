export interface Movie {
    title: string;
    year: string;
    genre: string;
    url: string;
    rating: number;
    duration: number;
    desc: string;
}

export interface MovieItem extends Movie {
    id: string;
    imageUrl: string;
}
