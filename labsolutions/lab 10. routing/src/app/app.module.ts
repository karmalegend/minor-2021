import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { CopyColumnDirective } from './directives/copy-column.directive';
import { HomePage } from './pages/home/home.page';
import { routes } from './app.routes';
import { InvitePage } from './pages/invite/invite.page';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe,
		CopyColumnDirective,
		HomePage,
		InvitePage
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
