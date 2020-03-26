import { RequestService } from './../request.service';
import { Request } from './../request';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.scss']
})
export class ListRequestComponent implements OnInit {
  requests: Request[];
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService) { }
  selectedRequest: Request;

  ngOnInit() {
    this.getReqs();
  }

  getDetails(request) {
    this.selectedRequest = request;
    // this.router.navigate(['request', request.id]);
    // console.log(this.selectedRequest);
  }

  getReqs() {
    // this.requests = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //     return this.requestService.getRequests();
    //   })
    // );
    this.requests = this.requestService.getRequests();
    console.log(this.requests);
  }
}
