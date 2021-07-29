import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number): string | number {
    let newValue;
    newValue = Math.round(value)
    if (value - newValue == 0) {
      return newValue
    } else {
      return value.toFixed(1)
    }

  }

}
