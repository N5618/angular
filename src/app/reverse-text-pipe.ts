import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: string) :string{
     if(!value) return '';
     return value.split('').reverse().join('');
  }

}

