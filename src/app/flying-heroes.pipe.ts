import { Pipe, PipeTransform } from '@angular/core';

class Flyer {
    constructor(public name: string, public canFly: boolean) { }
}

@Pipe({
    name: 'flyingHeroes',
    pure: false     // pipes are pure by default
})
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}