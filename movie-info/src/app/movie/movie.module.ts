import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularListComponent } from './popular-list/popular-list.component';
import { TopRatedListComponent } from './top-rated-list/top-rated-list.component';
import { InTheatresListComponent } from './in-theatres-list/in-theatres-list.component';

@NgModule({
  declarations: [
    PopularListComponent,
    TopRatedListComponent,
    InTheatresListComponent,
  ],
  imports: [CommonModule],
})
export class MovieModule {}
