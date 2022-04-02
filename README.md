# Material Theme Loader in Angular

> This repo is based on a PoC.  

## How to use

1. Define a default theme in the `AppModule`

    ```ts
    @NgModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        ThemeLoaderModule.forRoot({
          isDefault: true,
          themeName: 'light-theme',
        }),
        AppRoutingModule,
      ],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    ```

2. Define the theme name each routed module to use

    ```ts
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
    ```
