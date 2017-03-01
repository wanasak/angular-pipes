import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroBirthday1Component } from './hero-birthday1.component';
import { PowerBoosterComponent } from './power-booster.component';
import { FlyingHeroComponent } from './flying-hero.component';
import { ExponentialPipe } from './exponential.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroBirthday1Component, PowerBoosterComponent, ExponentialPipe, FlyingHeroComponent, FlyingHeroesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
