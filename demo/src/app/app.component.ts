import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Pokemon } from 'src/types';
import {Driver } from './models/driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	addDriverForm = new FormGroup({
		name: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]),
		points: new FormControl(undefined, Validators.required),
		photoUrl: new FormControl(undefined, Validators.required),
	});
	newDriver = {} as Driver;
	showLifecycle = true;
	pokemon?: Pokemon;

	// @ViewChild(AutocompleteComponent)
	// autocomplete!: AutocompleteComponent;

	drivers: Driver[] = [
		{ id: 4, name: 'Maxie Verstappen', points: 369.5, photoUrl: 'https://cdn.nos.nl/image/2021/12/04/809027/1024x576a.jpg'},
		{ id: 8, name: 'Lewie Hamilton', points: 369.5, photoUrl: 'https://images0.persgroep.net/rcs/sUVHDWIHt8emMMjFB6SSNbho9Ac/diocontent/210600718/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'},
		{ id: 15, name: 'Valttori Bottas', points: 312, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/F12019_Schloss_Gabelhofen_%2820%29.jpg'},
	];

	constructor(private http: HttpClient) {

	}

	ngOnInit() {
		this.http.post('...', {}).subscribe();

		this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(pokemon => {
			console.log('pokemon:', pokemon);

			this.pokemon = pokemon;
		});
	}

	addDriverReactive() {
		this.drivers.push(this.addDriverForm.value);
	}

	addDriverTemplate() {
		this.drivers.push(this.newDriver);

		// this.autocomplete.
	}

	handleAutocompleteSelect(driver: Driver) {
		console.log('hey er is iets geselecteerd in de autocomplete:', driver);
	}
}
