import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./pages/my-login/my-login.module').then(
            m => m.MyLoginPageModule
          )
      },
    ])
  ],
  exports: [RouterModule],
  // declarations: [
  //   MyLoginComponent
  // ],
})
export class LoginModule {}
