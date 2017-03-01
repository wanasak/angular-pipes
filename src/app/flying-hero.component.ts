import { Component } from '@angular/core';

@Component({
    selector: 'flying-hero',
    templateUrl: './app/flying-hero.component.html'
})
export class FlyingHeroComponent {
    heroes: any[] = [];
    canFly = true;
    constructor() { this.reset(); }

    addHero(name: string) {
        name = name.trim();
        if (!name) { return; }
        let hero = { name, canFly: this.canFly };
        this.heroes.push(hero);
    }

    reset() { this.heroes = []; }
}