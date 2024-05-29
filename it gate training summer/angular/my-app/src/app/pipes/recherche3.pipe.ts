import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche3'
})
export class Recherche3Pipe implements PipeTransform {
  transform(value: any , term:any): any {
    if (term==null){
      return value;
    }
    else {
      return value.filter((item:any)=>(item.title.includes(term)))
    }
    }

}
