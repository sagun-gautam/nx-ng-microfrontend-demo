import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  // { path: '', component: RemoteEntryComponent }
  {
    path: "",
    loadChildren: () => import('@app-demo/login').then(m => m.LoginModule)
  }
];
