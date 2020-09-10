import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(value: any): any {
    switch(value){
      case 1: return 'Half Hour';
      case 2: return 'One Hour';
      case 3: return 'Two Hour';
      default: return 'unknown duration';
    }

  }
}
