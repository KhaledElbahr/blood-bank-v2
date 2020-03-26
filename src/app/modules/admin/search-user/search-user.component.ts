import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  // pageNum = 1;
  users: User[];


  constructor(private userService: UserService) { }
    selectedUser: User;

  ngOnInit() {
    this.getReqs();
  }

  getDetails(user) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  getReqs() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  // onScrollDown() {
  //   console.log('scrolled!!');
  // this.pageNum++;
  //   this.getReqs();
  // }
}
