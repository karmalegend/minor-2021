import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DriverDal } from '../../dal/driver.dal';
import { Driver } from '../../models/driver';

@Component({
	selector: 'app-drivers',
	templateUrl: './drivers.page.html',
	styleUrls: ['./drivers.page.css'],
})
export class DriversPage implements OnInit {
	addDriverForm = new FormGroup({
		name: new FormControl(undefined, [
			Validators.required,
			Validators.pattern('^[a-zA-Z -]+$'),
		]),
		points: new FormControl(undefined, Validators.required),
		photoUrl: new FormControl(undefined, Validators.required),
	});
	newDriver = {} as Driver;

	// @ViewChild(AutocompleteComponent)
	// autocomplete!: AutocompleteComponent;

	drivers?: Driver[];

	constructor(private driverDal: DriverDal) {}

	ngOnInit() {
		this.driverDal.getAll().subscribe((drivers) => {
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
}
