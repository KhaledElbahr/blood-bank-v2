import { Component, Input } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;

  constructor() { }

  onSelected() { // user.id
    console.log(this.user);
  }

}
