import { Component } from '@angular/core';

@Component({
    selector: 'power-booster',
    template: `
        <h2>Power Booster</h2>
        <p>Super power boost: {{2 | exponential: 10}}</p>
    `
})
export class PowerBoosterComponent { }