import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
    transform(value: number, exponential: string) {
        let exp = parseInt(exponential);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}