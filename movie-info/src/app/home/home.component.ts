import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieList } from '../shared/interfaces/movie-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: MovieList;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopular().subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });
  }
}
