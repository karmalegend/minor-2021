import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({ providedIn: 'root' })
export class DriverDal {
	private subject = new Subject<Driver[]>();
	private drivers?: Driver[];

	constructor(private http: HttpClient) {}

	// indexed database
	// http
	// gRPC
	// websocket

	getAll() {
		this.http
			.get<Driver[]>('http://localhost:3000/driver')
			.subscribe((drivers) => {
				this.drivers = this.drivers ? this.drivers.concat(drivers) : drivers;
				this.subject.next(this.drivers);
			});

		return this.subject.asObservable();
	}

	add(driver: Driver) {
		this.http
			.post<Driver>('http://localhost:3000/driver', driver)
			.pipe(switchMap(() => this.http.get('htto://')))
			.subscribe((updatedDriver) => {

				
			});
	}
}
