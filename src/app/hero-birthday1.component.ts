import { Component } from '@angular/core';

@Component({
    selector: 'hero-birthday1',
    template: `
        <p>The hero's birthday is {{ birthday | date:format }}</p>
        <button (click)="toggleFormat()">Toggle Date Format</button>
    `
})
export class HeroBirthday1Component {
    birthday = new Date(1988, 3, 15);
    toggleDateFormat: boolean = true;   // true is shortDate

    get format() {
        return this.toggleDateFormat ? 'shortDate' : 'fullDate';
    }
    toggleFormat() {
        this.toggleDateFormat = !this.toggleDateFormat;
    }
}