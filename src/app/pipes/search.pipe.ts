import { Request } from './../modules/doctor/request';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(requests: Request[], term: number | any ): any {
    if (term === undefined || term === null) {
      return requests;
    }

    // tslint:disable-next-line:no-shadowed-variable
    return requests.filter( (request) => {
      return request.id.toString().trim().includes(term);
    }
    );
  }
}
