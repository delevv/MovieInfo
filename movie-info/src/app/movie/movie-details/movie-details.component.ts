import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/interfaces/movie';
import {
  faStar,
  faLaptopCode,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movie: Movie;

  faStar = faStar;
  faImdb = faImdb;
  faLaptopCode = faLaptopCode;
  faStopwatch = faStopwatch;

  constructor(
    private movieService: MovieService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieId = this.actRoute.snapshot.params['id'];

    this.movieService.getDetails(this.movieId).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
