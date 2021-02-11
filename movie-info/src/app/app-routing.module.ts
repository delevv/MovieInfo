import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InTheatresListComponent } from './movie/in-theatres-list/in-theatres-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { PopularListComponent } from './movie/popular-list/popular-list.component';
import { TopRatedListComponent } from './movie/top-rated-list/top-rated-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'movies',
    children: [{ path: ':id', component: MovieDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
