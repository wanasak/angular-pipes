import { Component } from '@angular/core';

@Component({
    selector: 'hero-birthday1',
    template: `
        <p>The hero's birthday is {{ birthday | date }}</p>
    `
})
export class HeroBirthday1Component {
    birthday = new Date(1988, 3, 15);
}