import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThemeLoaderService, THEME_LOADER } from './services';
import { ThemeLoaderSettings } from './types';

@NgModule()
export class ThemeLoaderModule {
  constructor(public themeLoaderService: ThemeLoaderService) {}

  static forRoot(
    settings: ThemeLoaderSettings
  ): ModuleWithProviders<ThemeLoaderModule> {
    return {
      ngModule: ThemeLoaderModule,
      providers: [
        {
          provide: THEME_LOADER,
          useValue: {
            ...settings,
          },
        },
      ],
    };
  }
}
