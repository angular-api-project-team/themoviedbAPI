import { Component } from '@angular/core';
import { ApiService } from './services/api.services';

interface Movie {
  title: string;
  overview: string;
  moreInfo: boolean;
  poster_path: string;
}

interface ApiData {
  results: Movie[];
  count: number;
  next: string;
  previous: string;
  favoriteMovie: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'AngularAPIproject';
  list: Movie[];
  favoriteMovie = false;
  
  errorMessage: string; //for the error

    constructor(private api: ApiService) { }

    // getAllPokemon = () => {
    //     console.log('BUTTON CLICKED');
    //     this.api.searchDB().subscribe(
    //         (data: ApiData) => {
    //             console.log('GETTING DATA');
    //             console.log(data['results'][0]['title']);
    //             this.list = data['results'];
    //             this.errorMessage = null;
    //         },
    //         error => {
    //             this.errorMessage = error.message;
    //         }
    //     );                                     
    //     console.log('AFTER SUBSCRIBE IS CALLED');
    //     };

        

      
  // requestMoreInfo = (pokemon) => {
  //   pokemon.moreInfo = !pokemon.moreInfo;
  //    console.log(pokemon);
  // };

  // favoriteThisMovie = (pokemon) => {
  //   pokemon.favoriteMovie = !pokemon.favoriteMovie;
  // };





}

