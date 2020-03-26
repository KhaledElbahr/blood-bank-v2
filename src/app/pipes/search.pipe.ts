import { Request } from './../modules/doctor/request';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], term: number | any ): any {
    if (term === undefined || term === null) {
      return arr;
    }

    // tslint:disable-next-line:no-shadowed-variable
    return arr.filter( (r) => {
      return r.id.toString().trim().includes(term);
    }
    );
  }
}
