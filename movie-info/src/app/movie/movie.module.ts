import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PopularListComponent } from './popular-list/popular-list.component';
import { TopRatedListComponent } from './top-rated-list/top-rated-list.component';
import { InTheatresListComponent } from './in-theatres-list/in-theatres-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    PopularListComponent,
    TopRatedListComponent,
    InTheatresListComponent,
    MovieDetailsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
})
export class MovieModule {}
