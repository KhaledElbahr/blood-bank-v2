import { Request } from './../../request';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit, OnChanges {
  request: Request;

  constructor(
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      // console.log(this.route.snapshot.queryParams);
      // console.log(this.route.snapshot.fragment);
      // this.route.queryParams.subscribe(
      //   (params: Params) => {
      //     this.allowEdit = params.allowEdit === '1' ? true : false;
      //   }
      // );
      this.route.fragment.subscribe();
      let id: number;
      this.route.params.subscribe(
        (params: Params) => {
          id = +params.id;
        }
      );
      this.request = this.requestService.getRequest(id);
      // console.log(this.request);
      // this.serverName = this.request.name;
      // this.serverStatus = this.server.status;
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      // const currentRequest = changes.currentRequest;
      // const previousRequest = changes.currentRequest;
      // console.log(currentRequest);
      // console.log(previousRequest);
    }

    onUpdate() {
      this.router.navigate(['editMode'], {relativeTo: this.route});
    }
}
