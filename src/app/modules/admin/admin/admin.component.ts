import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private authService: AuthService) { }
  onLogout() {
    this.authService.logout();
  }
}
