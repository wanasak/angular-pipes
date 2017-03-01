import { Component } from '@angular/core';

@Component({
    selector: 'flying-hero',
    templateUrl: './app/flying-hero.component.html'
})
export class FlyingHeroComponent {
    heroes: any[] = [];
    canFly = true;
    mutate = true;
    constructor() { this.reset(); }

    addHero(name: string) {
        name = name.trim();
        if (!name) { return; }
        let hero = { name, canFly: this.canFly };
        if (this.mutate) {
            // pure pipe won't update display because heroes array reference is unchanged
            // impure pipe will display
            this.heroes.push(hero);
        } else {
            // pipe updates display because array is a new object
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() { this.heroes = []; }
}