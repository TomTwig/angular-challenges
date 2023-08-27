import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string = '', length: number = 100): string {
let truncateValue ='';
    if(value.length >= length){
      truncateValue = value.slice(0,length) + '...'
    }

    return truncateValue;
  }

}
