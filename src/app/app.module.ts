import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HelloWorldComponent} from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HolaMundoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
