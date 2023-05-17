import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from '@nrwl/angular/mf';

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/Inbox",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "feature-a",
    loadChildren: () =>
        loadRemoteModule('feature-a', './Module').then(
            (m) => m.RemoteEntryModule
         ),
  },
  {
    path: "feature-b",
    loadChildren: () =>
        loadRemoteModule('feature-b', './Module').then(
            (m) => m.RemoteEntryModule
         ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
