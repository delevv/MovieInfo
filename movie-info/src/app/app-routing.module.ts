import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InTheatresListComponent } from './movie/in-theatres-list/in-theatres-list.component';
import { PopularListComponent } from './movie/popular-list/popular-list.component';
import { TopRatedListComponent } from './movie/top-rated-list/top-rated-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'movies',
    children: [
      { path: 'popular', component: PopularListComponent },
      {
        path: 'top-rated',
        component: TopRatedListComponent,
      },
      { path: 'in-theatres', component: InTheatresListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
