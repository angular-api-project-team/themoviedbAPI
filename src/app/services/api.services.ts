import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {
    // apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    // apiUrl = 'https://api.themoviedb.org/3/movie/76341'
    // apiConnect = '?api_key='
    // apiKey = '2846ec3605a4360f1d20020f6f7b9e0a';
    // https://api.themoviedb.org/3/movie/550?api_key=2846ec3605a4360f1d20020f6f7b9e0a


    //https://api.themoviedb.org/3/genre/movie/list?api_key=2846ec3605a4360f1d20020f6f7b9e0a&language=en-US

    private movieListService = new BehaviorSubject([]);
    movieList = this.movieListService.asObservable();

    apiUrl = 'https://api.themoviedb.org/3/';
    apiConnect = '?api_key=';
    apiKey = '2846ec3605a4360f1d20020f6f7b9e0a';
    apiUrlPagination = '&page=1'

    // THIS IS FOR SEARCHING BY GENRES
    apiUrlGenre = ''; //genre/movie/list

    // THIS IS FOR SEARCHING BY COMPANY
    apiUrlMovieTitle = ''; //search/company



    // THIS IS FOR SEARCHING BY POPULAR MOVIE
    apiUrlPopular = 'movie/popular'
    


// THIS IS HOW YOU SEARCH FOR MOVIES
    //https://developers.themoviedb.org/3/search/search-movies


    constructor(private http: HttpClient) { } //this allows us to use the http in this service
    searchDB = () => {
        return this.http.get(`${this.apiUrl}${this.apiUrlGenre}${this.apiUrlMovieTitle}${this.apiUrlPopular}${this.apiConnect}${this.apiKey}${this.apiUrlPagination}`);
    };

    updateMovieList = newList => this.movieListService.next(newList)
    

}
