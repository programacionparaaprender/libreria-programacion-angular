import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaModule } from 'projects/hola/src/lib/hola.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
