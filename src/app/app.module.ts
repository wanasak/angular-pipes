import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroBirthday1Component } from './hero-birthday1.component';
import { PowerBoosterComponent } from './power-booster.component';
import { FlyingHeroComponent } from './flying-hero.component';
import { ExponentialPipe } from './exponential.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessage } from './hero-async-message.component';
import { HeroListComponent } from './heroes-list.component';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [
    AppComponent,
    HeroBirthday1Component,
    PowerBoosterComponent,
    ExponentialPipe,
    FlyingHeroComponent,
    FlyingHeroesPipe,
    HeroAsyncMessage,
    HeroListComponent,
    FetchJsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
