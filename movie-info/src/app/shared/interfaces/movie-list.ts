import { MovieInList } from './movie-in-list';

export interface MovieList {
  page: number;
  results: MovieInList[];
  total_pages: number;
  total_results: number;
}
