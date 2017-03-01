import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroBirthday1Component } from './hero-birthday1.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeroBirthday1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
