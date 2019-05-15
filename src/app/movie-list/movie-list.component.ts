import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

interface Movie {
  title: string;
  overview: string;
  moreInfo: boolean;
  poster_path: string;
  favoriteMovie: boolean;
  adult: boolean;
  releaseYear: string;
  displayMovie: boolean;
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
  displayMovie: boolean = true; 
  returnMovieSearch: object
  releaseYear: string;

  errorMessage: string; //for the error

  constructor(private api: ApiService) { }


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

    

    showMeTheTitle = (input) => {

      let apiUrl = 'https://api.themoviedb.org/3/';
      let apiUrlSearch = 'search/movie'
      let apiConnect = '?api_key=';
      let apiKey = '2846ec3605a4360f1d20020f6f7b9e0a';
      let apiUrlPagination = '&page=1'
      // https://api.themoviedb.org/3/search/movie?api_key=2846ec3605a4360f1d20020f6f7b9e0a&language=en-US&query=avengers&page=1&include_adult=false
   
   
      let releaseDate = '';
      let i;
      // console.log(this.list);
      for (i = 0; i < this.list.length; i++) {
        // console.log(this.list[i]);
   
   
        if (this.list[i]['title'] === input) {
          console.log(this.list[i]);
          this.displayMovie = !this.displayMovie;
          this.returnMovieSearch = this.list[i];
          const displaySearch = (pokemon) => {
            pokemon.displayMovie = !pokemon.displayMovie;
          }
   
          console.log(releaseDate);
          releaseDate += this.list['release_date'];
          console.log(releaseDate);
          this.releaseYear = releaseDate
        }
        else {
          // console.log('failed');
        }
   
        // this.releaseYear = releaseDate;
        // console.log(releaseDate);
   
      }
   
    }

  requestMoreInfo = (pokemon) => {
    pokemon.moreInfo = !pokemon.moreInfo;
    let releaseDate = '';
   let i;
   for (i = 0; i < 4; i++) {
     releaseDate += pokemon.release_date[i];
   };
   pokemon.releaseYear = releaseDate;
   console.log("this is pokemon.releaseYear from the for loop: " + pokemon.releaseYear);

   console.log("this is pokemon :" + pokemon.release_date);

   console.log("this is pokemon.moreInfo :" + pokemon.moreInfo);
    console.log(pokemon);
  };

  favoriteThisMovie = (pokemon) => {
    pokemon.favoriteMovie = !pokemon.favoriteMovie;
    this.api.updateMovieList(this.list);
    console.log(this.list);
  };

  
  }




