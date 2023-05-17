import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-feature-b-entry',
  template: `
        <style>
      :host{
        background: #fff;
      }
    </style>
  <ion-content><app-demo-nx-welcome></app-demo-nx-welcome></ion-content>`,
})
export class RemoteEntryComponent {}
