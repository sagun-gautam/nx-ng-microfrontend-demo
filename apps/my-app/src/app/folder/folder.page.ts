import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from '@app-demo/shared/data-access-user';

@Component({
  selector: "app-demo-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder!: string;
  isUserLoggedIn = this.userService.isUserLoggedIn$;
  userName = this.userService.userName$;
  isUserActive = this.userService.isUserActive$;
  savedPicture = this.userService.capturedPicture$;
  status = false;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.folder = id;
    }


  }

  changeStatus() {
    this.status = !this.status;
    this.userService.changeUserStatus();
    this.userService.changeUserName('Main App Click');
    this.userService.changeUserLoggedInStatus(this.status);
  }
}
