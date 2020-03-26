import { UserService } from './../../user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.fragment.subscribe();
      let id: number;
      this.route.params.subscribe(
        (params: Params) => {
          id = +params.id;
        }
      );
      this.user = this.userService.getUser(id);
    }

}
