import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/types';
import { DriverDal } from '../../dal/driver.dal';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-zooi',
  templateUrl: './zooi.page.html',
  styleUrls: ['./zooi.page.css']
})
export class ZooiPage implements OnInit {
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

	handleAutocompleteSelect(driver: Driver) {
		console.log('hey er is iets geselecteerd in de autocomplete:', driver);
	}
}
