import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCase',
})
export class CustomCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string | null {
    // [arg0, arg1, arg2]
    const [arg0] = args;

    if (value && typeof value === 'string') {
      if (arg0 === 'uppercase') {
        return value.toUpperCase();
      } else if (arg0 === 'lowercase') {
        return value.toLowerCase();
      } else {
        return value;
      }
    }

    return null;
  }
}
