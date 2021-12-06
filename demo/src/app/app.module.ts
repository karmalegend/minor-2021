import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // components directives pipes
    AppComponent
  ],
  imports: [ // modules
    BrowserModule,
	FormsModule
  ],
  providers: [], // globale instellingen & services voor DI
  bootstrap: [AppComponent]
})
export class AppModule { }
