import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

interface Movie {
  title: string;
  overview: string;
  moreInfo: boolean;
  poster_path: string;
  favoriteMovie: boolean;
  adult: boolean;
  searchFunctionAdult: boolean;
  popularity: number;
  genre_ids: [];
  vote_count: number;
  vote_average: number;
}

interface ApiData {
  results: Movie[];
  count: number;
  next: string;
  previous: string;
  
}

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  title = 'AngularAPIproject';
  list: Movie[];
  favoriteMovie = false;
  searchFunctionAdult = false;
  adult: boolean;
  errorMessage: string;
  vote_count: number;



  constructor(private api: ApiService) { }

  ngOnInit() {
    
    };
  

  // searchAdult = () => {
  //       console.log('BUTTON CLICKED');
       
  //         if (this.vote_count > 100) {
  //           this.api.searchDB().subscribe(
  //           (data: ApiData) => {
  //               console.log('GETTING DATA');
  //               console.log(data['results'][0]['title']);
  //               this.list = data['results'];
  //               this.errorMessage = null;
  //           },
  //           error => {
  //               this.errorMessage = error.message;
  //           }
  //       );                                     
  //       console.log('AFTER SUBSCRIBE IS CALLED');
  //         }
  //       };

  searchAction = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.vote_average >= 8)
    });
    };

}
