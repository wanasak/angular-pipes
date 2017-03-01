import { Component } from '@angular/core';

@Component({
    selector: 'hero-list',
    template: `
    <h2>Heroes from JSON File</h2>
    <div *ngFor="let hero of ('heroes.json' | fetch) ">
      {{hero.name}}
    </div>
    `
})

export class HeroListComponent { }
