import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly settings: UserManagerSettings = {
		authority: 'https://localhost:5000',
		client_id: 'angulah',
		redirect_uri: 'http://localhost:4200/login-callback',
		response_type: 'code',
		scope: 'openid profile pokemonapi',
	};
	readonly userManager = new UserManager(this.settings);

	user?: User;

	async logIn() {
		await this.userManager.signinRedirect();
	}
	async logOff() {
		await this.userManager.signoutRedirect();
	}

	async complete() {
		this.user = await this.userManager.signinCallback();
		console.log('ingelogd:', this.user);
	}
}
