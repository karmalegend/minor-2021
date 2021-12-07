import { Page } from '@playwright/test';
import { Driver } from './models/driver';

export class MainPO {
	constructor(private page: Page) {}

	async countDrivers() {
		return (await this.page.$$('table tbody tr')).length;
	}
	async submitForm(driver: Driver) {
		await this.page.type('#input-coureur', driver.name);
		await this.page.type('#input-points', driver.points.toString());
		await this.page.type('#input-photo-url', driver.photoUrl);
		await this.page.click('#reactive-form button');
	}
	async navigateTo() {
		await this.page.goto('http://localhost:4200');
	}
}
