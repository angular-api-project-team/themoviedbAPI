import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ApiService } from './services/api.services';

const appRoutes: Routes = [
  {path: '', component: MovieListComponent},
  { path: 'watchlist', component: WatchlistPageComponent },
  { path: 'search-criteria', component: SearchCriteriaComponent  },
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
