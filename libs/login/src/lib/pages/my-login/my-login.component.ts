import { Component } from '@angular/core';
import { UserService } from '@app-demo/shared/data-access-user';

@Component({
  selector: 'app-demo-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss'],
  standalone: false,
})
export class MyLoginComponent {

  isUserLoggedIn = this.userService.isUserLoggedIn$;
  userName = this.userService.userName$;
  isUserActive = this.userService.isUserActive$;
  status = false;

  constructor(private userService: UserService) {
  }

  changeStatus() {
    this.status = !this.status;
    this.userService.changeUserStatus();
    this.userService.changeUserName('Feature App B Click');
    this.userService.changeUserLoggedInStatus(this.status);
  }

}
