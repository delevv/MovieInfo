import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MovieList } from 'src/app/shared/interfaces/movie-list';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/interfaces/movie';
import { Genre } from 'src/app/shared/interfaces/genre';

const API_KEY: string = environment.MovieDb.API_KEY;
const moviesUrl: string = 'https://api.themoviedb.org/3/movie';
const genresURL: string = 'https://api.themoviedb.org/3/genre/movie/list';
const popularUrl: string = `${moviesUrl}/popular`;
const topRatedUrl: string = `${moviesUrl}/top_rated`;
const nowPlaying: string = `${moviesUrl}/now_playing`;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopular(page: number = 1): Observable<MovieList> {
    return this.http.get<MovieList>(
      `${popularUrl}?api_key=${API_KEY}&page=${page}`
    );
  }

  getTopRated(page: number = 1): Observable<MovieList> {
    return this.http.get<MovieList>(
      `${topRatedUrl}?api_key=${API_KEY}&page=${page}`
    );
  }

  getNowPlaying(page: number = 1): Observable<MovieList> {
    return this.http.get<MovieList>(
      `${nowPlaying}?api_key=${API_KEY}&page=${page}`
    );
  }

  getDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${moviesUrl}/${id}?api_key=${API_KEY}`);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${genresURL}?api_key=${API_KEY}`);
  }
}
