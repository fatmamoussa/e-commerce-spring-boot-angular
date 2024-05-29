import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche2'
})
export class Recherche2Pipe implements PipeTransform {

  transform(value: any , term:any): any {
    if (term==null){
      return value;
    }
    else {
      return value.filter((item:any)=>(item.adresse.includes(term)))
    }
    }
  
}
