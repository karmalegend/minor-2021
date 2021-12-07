import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Driver } from './models/driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	addDriverForm = new FormGroup({
		name: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]),
		points: new FormControl(undefined, Validators.required),
		photoUrl: new FormControl(undefined, Validators.required),
	});
	newDriver = {} as Driver;

	drivers: Driver[] = [
		{ id: 4, name: 'Maxie Verstappen', points: 369.5, photoUrl: 'https://cdn.nos.nl/image/2021/12/04/809027/1024x576a.jpg'},
		{ id: 8, name: 'Lewie Hamilton', points: 369.5, photoUrl: 'https://images0.persgroep.net/rcs/sUVHDWIHt8emMMjFB6SSNbho9Ac/diocontent/210600718/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'},
		{ id: 15, name: 'Valttori Bottas', points: 312, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/F12019_Schloss_Gabelhofen_%2820%29.jpg'},
	];

	addDriverReactive() {
		this.drivers.push(this.addDriverForm.value);
	}

	addDriverTemplate() {
		this.drivers.push(this.newDriver);
	}
}
