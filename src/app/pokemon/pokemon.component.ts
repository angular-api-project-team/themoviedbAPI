import { Component } from '@angular/core';
import { ApiService } from '../services/api.services';

interface ApiData {
    results: object[];
    count: number;
    next: string;
    previous: string;
}

@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    providers: [ApiService]
})
export class PokemonComponent {
    title = 'pokemon';
    list: object[];
    errorMessage: string; //for the error

    constructor(private api: ApiService) { }

    getAllPokemon = () => {
        // this.api.getPokemon().subscribe(data => console.log(data));
        // every variable here i define EXCEPT for the 'results' variable, which i get from looking at the data returned by the api  
        // this.apiService.getPeople().subscribe((data: People) => this.people = { ...data })
        // this.api.getPokemon().subscribe((data: ApiData) => { this.list = data.results }); //another way of writing what is below
        console.log('BUTTON CLICKED');
        this.api.searchDB().subscribe(
            (data: ApiData) => {
                console.log('GETTING DATA');
                // console.log(data['genres'])
                // this.list = data['genres'];
                console.log(data['results'][0]['title']);
                this.list = data['results'];
                this.errorMessage = null;
            },
            error => {
                this.errorMessage = error.message;
            }
            //error => console.log(error.message) //many cases for dealing with errors ... which is why the api function allows for 2 functions
        );                                     //the first function is the api call and the second function is the error message
        console.log('AFTER SUBSCRIBE IS CALLED');
        

    };
}