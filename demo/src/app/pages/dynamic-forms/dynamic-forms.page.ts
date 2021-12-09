import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DriverDal } from 'src/app/dal/driver.dal';
import { Driver } from 'src/app/models/driver';

@Component({
	selector: 'app-dynamic-forms',
	templateUrl: './dynamic-forms.page.html',
	styleUrls: ['./dynamic-forms.page.css'],
})
export class DynamicFormsPage implements OnInit {
	form!: FormGroup;
	drivers?: Driver[]

	constructor(private fb: FormBuilder, private driverDal: DriverDal) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			title: ['default value'],
			drivers: this.fb.array([]),
		});


		this.driverDal.getAll().subscribe((drivers) => {
			this.drivers = drivers;
			
			let driverArray = this.form.get('drivers') as FormArray;

			for (let driver of drivers) {
				driverArray.push(
					this.fb.group({
						name: [driver.name],
						checked: [],
					})
				);
			}
		});
	}
}
