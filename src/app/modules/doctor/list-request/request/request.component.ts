import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from './../../request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  @Input() request: Request;

  constructor(private route: ActivatedRoute, private router: Router) { }

  onSelected() {
    // this.router.navigate(['request', ':id'], { relativeTo: this.route });
    console.log(this.request);
  }
}
