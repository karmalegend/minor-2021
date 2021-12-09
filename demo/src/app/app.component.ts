import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/types';
import { DriverDal } from './dal/driver.dal';
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

	drivers?: Driver[];

	constructor(private driverDal: DriverDal) {

	}

	ngOnInit() {
		this.driverDal.getAll().subscribe(drivers => {
			console.log('drivers:', drivers);
			this.drivers = drivers;
		});
	}

	addDriverReactive() {
		this.driverDal.add(this.addDriverForm.value);
	}

	addDriverTemplate() {
		// this.drivers!.push(this.newDriver);

		// this.autocomplete.
	}

	handleAutocompleteSelect(driver: Driver) {
		console.log('hey er is iets geselecteerd in de autocomplete:', driver);
	}
}
