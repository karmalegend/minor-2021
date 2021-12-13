import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.page.html',
	styleUrls: ['./auth.page.css'],
})
export class AuthPage {
	constructor(
		private http: HttpClient,
		private authService: AuthService) {}

	logIn() {
		this.authService.logIn();
	}
	logOff() {
		this.authService.logOff();
	}

	getPokemon() {
		
		let headers = new HttpHeaders({
			Authorization: `Bearer ${this.authService.user?.access_token}`
		});

		this.http.get('https://localhost:7157/api/pokemon', { headers }).subscribe(pokemon => {
			console.log('pokemon:', pokemon);
		});
	}
}
