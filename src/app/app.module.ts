import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroBirthday1Component } from './hero-birthday1.component';
import { PowerBoosterComponent } from './power-booster.component';
import { FlyingHeroComponent } from './flying-hero.component';
import { ExponentialPipe } from './exponential.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeroBirthday1Component, PowerBoosterComponent, ExponentialPipe, FlyingHeroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
