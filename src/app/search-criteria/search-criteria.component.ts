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
  release_date: string;
  vote_count: number;
  vote_average: number;
  releaseYear: string;

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
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  title = 'AngularAPIproject';
  list: Movie[];
  favoriteMovie = false;
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

  searchAverageFive = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.vote_average <= 5)
    });
  };

  searchAverageEight = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.vote_average <= 8)
    });
  };

  searchAverageTen = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.vote_average > 8)
    });
  };

  searchGenreAction = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.genre_ids.includes(28))
    });
    console.log('action button works')
  };

  searchGenreComedy = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.genre_ids.includes(35))
    });
    console.log('comedy button works')
  };

  searchGenreRomance = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.genre_ids.includes(10749))
    });
    console.log('romance button works')
  };

  searchGenreFantasy = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.genre_ids.includes(14))
    });
    console.log('Fantasy button works')
  };

  searchGenreHorror = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.genre_ids.includes(27))
    });
    console.log('Horror button works')
  };

  releaseYear2019 = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.release_date.includes("2019")
    )});
    console.log('Release button works')
  };

  releaseYear2018 = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => movie.release_date.includes("2018")
    )});
    console.log('Release button works')
  };

  releaseYear2017 = () => {
    this.api.movieList.subscribe(list => {
      this.list = list.filter(movie => parseInt(movie.release_date, 10) < 2017      
    )});
    console.log(this.list);
    console.log('Release button works')
  };

  favoriteThisMovie = (pokemon) => {
    pokemon.favoriteMovie = !pokemon.favoriteMovie;
    // this.api.updateMovieList(this.list);
    console.log(this.list);
  };

  requestMoreInfo = (pokemon) => {
    pokemon.moreInfo = !pokemon.moreInfo;
    console.log(pokemon);
  };

}
