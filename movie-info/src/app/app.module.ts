import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MovieModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
