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

export interface MoviesRes {
  data: Movie[];
  totalAmount: number;
}

export interface Filter {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface MoviesFilter extends Filter {
  genre: string | null;
}
