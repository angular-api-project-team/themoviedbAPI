import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

interface Movie {
  title: string;
  overview: string;
  moreInfo: boolean;
  poster_path: string;
  favoriteMovie: boolean;
}

interface ApiData {
  results: Movie[];
  count: number;
  next: string;
  previous: string;
  
}

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
  providers: [ApiService]
})
export class WatchlistPageComponent implements OnInit {
  title = 'AngularAPIproject';
  list: Movie[];
  favoriteMovie = false;

  errorMessage: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.favoriteMovie = true) {
    return this.list;
      };
    };
  }


