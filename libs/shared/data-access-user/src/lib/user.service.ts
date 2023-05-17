import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Camera, CameraResultType } from '@capacitor/camera';

interface Photo {
  format?: string | undefined, 
  saved?: boolean | undefined, 
  webPath?: string | undefined
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(false);
  private userName = new BehaviorSubject('');
  private isUserActive = new BehaviorSubject(false);
  private capturedPicture = new BehaviorSubject<Photo>({});

  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  userName$ = this.userName.asObservable();
  isUserActive$ = this.isUserActive.asObservable();
  capturedPicture$ = this.capturedPicture.asObservable();

  changeUserStatus() {
    const currentValue = this.isUserActive.getValue();
    this.isUserActive.next(!currentValue);
  }

  changeUserName(name: string) {
    this.userName.next(name);
  }

  changeUserLoggedInStatus(status: boolean) {
    this.isUserLoggedIn.next(status);
  }

  takePicture = async () => {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  };

  addPhotos(data: Photo) {
    this.capturedPicture.next(data);
  }

}
