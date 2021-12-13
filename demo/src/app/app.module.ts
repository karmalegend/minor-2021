import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LewisLoserPipe } from './pipes/lewis-loser.pipe';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
// import { NavigateService } from 'src/services/navigate.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DriversPage } from './pages/drivers/drivers.page';
import { ZooiPage } from './pages/zooi/zooi.page';
import { routes } from './app.routes';
import { DynamicFormsPage } from './pages/dynamic-forms/dynamic-forms.page';
import { AuthPage } from './pages/auth/auth.page';
import { LoginCallbackPage } from './pages/login-callback/login-callback.page';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@NgModule({
	declarations: [
		// dingen in je HTML: components directives pipes
		AppComponent,
		LewisLoserPipe,
		LifecycleComponent,
		AutocompleteComponent,
  DriversPage,
  ZooiPage,
  DynamicFormsPage,
  AuthPage,
  LoginCallbackPage,
  PokedexComponent,
	],
	imports: [
		// modules
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		//   { provide: NavigateService, useClass: NavigateServiceMock },
		//   NavigateService // Angular 2 4 5 6
	], // globale instellingen & services voor DI
	bootstrap: [AppComponent],
})
export class AppModule {}
