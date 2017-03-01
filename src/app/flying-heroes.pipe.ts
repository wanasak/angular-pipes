import { Pipe, PipeTransform } from '@angular/core';

class Flyer {
    constructor(public name: string, public canFly: boolean) { }
}

@Pipe({
    name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}