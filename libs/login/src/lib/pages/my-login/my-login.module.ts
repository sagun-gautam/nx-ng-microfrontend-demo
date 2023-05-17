import { CommonModule as AngularCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyLoginComponent } from './my-login.component';

const routes: Routes = [
  {
    path: '',
    component: MyLoginComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    AngularCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyLoginComponent]
})
export class MyLoginPageModule {}
