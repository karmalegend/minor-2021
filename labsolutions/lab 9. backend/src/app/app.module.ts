import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CopyColumnDirective } from './directives/copy-column.directive';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe,
		CopyColumnDirective
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ToastrModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
