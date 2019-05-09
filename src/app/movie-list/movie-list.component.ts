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
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})

export class MovieListComponent implements OnInit {
  title = 'AngularAPIproject';
  list: Movie[];
  favoriteMovie = false;

  errorMessage: string; //for the error

  constructor(public api: ApiService) { }


  ngOnInit() {
    console.log('BUTTON CLICKED');
    this.api.movieList.subscribe(list => {
      if (!list.length) {
        this.api.searchDB().subscribe(
            (data: ApiData) => {
                console.log('GETTING DATA');
                console.log(data['results'][0]['title']);
    
                this.api.updateMovieList(data['results']);
                this.errorMessage = null;
            },
            error => {
                this.errorMessage = error.message;
            }
        );       
      }                              
      this.list = list;
    });

    console.log('AFTER SUBSCRIBE IS CALLED');
    };


  // getAllPokemon = () => {
  //   console.log('BUTTON CLICKED');
  //   this.api.searchDB().subscribe(
  //       (data: ApiData) => {
  //           console.log('GETTING DATA');
  //           console.log(data['results'][0]['title']);
  //           this.list = data['results'];
  //           this.errorMessage = null;
  //       },
  //       error => {
  //           this.errorMessage = error.message;
  //       }
  //   );                                     
  //   console.log('AFTER SUBSCRIBE IS CALLED');
  //   };

     requestMoreInfo = (pokemon) => {
    pokemon.moreInfo = !pokemon.moreInfo;
     console.log(pokemon);
  };

  favoriteThisMovie = (pokemon) => {
    pokemon.favoriteMovie = !pokemon.favoriteMovie;
    this.api.updateMovieList(this.list);
    console.log(this.list);
  };
  }




