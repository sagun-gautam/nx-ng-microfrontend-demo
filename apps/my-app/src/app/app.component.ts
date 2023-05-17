import { Component } from "@angular/core";
import { UserService } from "@app-demo/shared/data-access-user";
import { MenuController, NavController} from "@ionic/angular"

@Component({
  selector: "app-demo-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  public appPages = [
    { title: "Inbox", url: "/folder/Inbox", icon: "mail" },
    { title: "Outbox", url: "/folder/Outbox", icon: "paper-plane" },
    { title: "Favorites", url: "/folder/Favorites", icon: "heart" },
    { title: "Archived", url: "/folder/Archived", icon: "archive" },
    { title: "Trash", url: "/folder/Trash", icon: "trash" },
    { title: "Spam", url: "/folder/Spam", icon: "warning" },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];
  constructor(private userService: UserService, private menuCtrl: MenuController, private navCtrl: NavController) {}

  isUserLoggedIn = this.userService.isUserLoggedIn$;
  userName = this.userService.userName$;
  isUserActive = this.userService.isUserActive$;
  status = false;

  changeStatus() {
    this.status = !this.status;
    this.userService.changeUserStatus();
    this.userService.changeUserName('Main User');
    this.userService.changeUserLoggedInStatus(this.status);
  }

  goTo(route: string){
    this.menuCtrl.close();
    this.navCtrl.navigateForward(route);
  }
}
