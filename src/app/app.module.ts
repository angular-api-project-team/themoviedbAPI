import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes: Routes = [
  // { path: '', component: ReverseComponent },
  { path: 'app-root', component: AppComponent },
  // { path: 'star-wars', component: StarWarsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    WatchlistPageComponent,
    SearchCriteriaComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
