import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{ title | uppercase }}</p>
    <p>{{ title | lowercase }}</p>
    <p>{{ myNum | currency }}</p>
    <p>{{ myNum | percent:'3.2-2' }}</p>
    <hero-birthday1></hero-birthday1>
    <power-booster></power-booster>
  `
})
export class AppComponent {
  title = 'Angular Pipe Tutorial';
  myNum: number = 0.1415927;
}
