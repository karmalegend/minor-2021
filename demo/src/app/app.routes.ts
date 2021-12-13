import { Routes } from '@angular/router';
import { AuthPage } from './pages/auth/auth.page';
import { DriversPage } from './pages/drivers/drivers.page';
import { DynamicFormsPage } from './pages/dynamic-forms/dynamic-forms.page';
import { LoginCallbackPage } from './pages/login-callback/login-callback.page';
import { ZooiPage } from './pages/zooi/zooi.page';

// URL is part of the UI

export const routes: Routes = [
	// { path: '', component: DriversPage },
	{ path: 'drivers', component: DriversPage },
	{ path: 'zooi', component: ZooiPage },
	{ path: 'dynamic-forms', component: DynamicFormsPage },
	{ path: 'auth', component: AuthPage },
	{ path: 'login-callback', component: LoginCallbackPage },
	{ path: '', redirectTo: '/drivers', pathMatch: 'full'}
];
