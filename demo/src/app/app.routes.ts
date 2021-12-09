import { Routes } from '@angular/router';
import { DriversPage } from './pages/drivers/drivers.page';
import { DynamicFormsPage } from './pages/dynamic-forms/dynamic-forms.page';
import { ZooiPage } from './pages/zooi/zooi.page';

// URL is part of the UI

export const routes: Routes = [
	// { path: '', component: DriversPage },
	{ path: 'drivers', component: DriversPage },
	{ path: 'zooi', component: ZooiPage },
	{ path: 'dynamic-forms', component: DynamicFormsPage },
	{ path: '', redirectTo: '/drivers', pathMatch: 'full'}
];
