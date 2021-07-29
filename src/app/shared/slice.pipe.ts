import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string): string {
    let newValue = value.slice(0, 20) + ' ....'
    return newValue
  }

}
