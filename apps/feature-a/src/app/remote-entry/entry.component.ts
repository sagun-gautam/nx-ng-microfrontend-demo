import { Component } from '@angular/core';
import { UserService } from '@app-demo/shared/data-access-user';

@Component({
  selector: 'app-demo-feature-a-entry',
  template: `
    <style>
      :host{
        background: #fff;
      }
    </style>
  <ion-content>
    <div style="padding: 20px; text-align:center; margin-top: 5.5rem;">
      <h1 style="font-size: 28px">Feature A</h1>
      <p>This feature is loaded from remote location hosted in firebase:
        <br> <br> <i style="color: blue"> https://micro-app-proto.firebaseapp.com </i> 
      </p>
      <p>Click: {{ userName | async}}</p>
      <p>User is logged in: {{isUserLoggedIn | async}}</p>
      <p>User is active: {{isUserActive | async}}</p>
      <br>
      <ion-button (click)="changeStatus()" color="primary" size="small">Change Status</ion-button>

      <br>
      <ion-button (click)="takePicture()" color="secondary"> Take Picture </ion-button>
    </div>
    </ion-content>
  `,
})
export class RemoteEntryComponent {

  isUserLoggedIn = this.userService.isUserLoggedIn$;
  userName = this.userService.userName$;
  isUserActive = this.userService.isUserActive$;
  status = false;

  constructor(private userService: UserService) {
  }

  changeStatus() {
    this.status = !this.status;
    this.userService.changeUserStatus();
    this.userService.changeUserName('Feature App Click');
    this.userService.changeUserLoggedInStatus(this.status);
  }

  takePicture() {
    this.userService.takePicture().then(res => {
      console.log(res);
      this.userService.addPhotos(res);
    })
  }

}
