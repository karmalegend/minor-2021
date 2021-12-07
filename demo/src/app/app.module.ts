import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LewisLoserPipe } from './pipes/lewis-loser.pipe';

@NgModule({
  declarations: [ // dingen in je HTML: components directives pipes
    AppComponent,
	LewisLoserPipe
  ],
  imports: [ // modules
    BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [  ], // globale instellingen & services voor DI
  bootstrap: [AppComponent]
})
export class AppModule { }
