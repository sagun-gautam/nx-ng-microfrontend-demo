import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'feature-b',
    loadChildren: () =>
      loadRemoteModule('feature-b', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'feature-a',
    loadChildren: () =>
      import('feature-a/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
