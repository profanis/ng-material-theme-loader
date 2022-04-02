import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeLoader, ThemeUnloader } from '@theme-loader';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    data: {
      themeName: 'dark-theme',
    },
    canActivate: [ThemeLoader],
    canDeactivate: [ThemeUnloader],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      themeName: 'light-theme',
    },
    canActivate: [ThemeLoader],
    canDeactivate: [ThemeUnloader],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
