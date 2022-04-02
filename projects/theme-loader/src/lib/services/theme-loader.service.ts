import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { ThemeLoaderSettings } from '../types';

export const THEME_LOADER = new InjectionToken<ThemeLoaderSettings>(
  'theme loader'
);

@Injectable({
  providedIn: 'root',
})
export class ThemeLoaderService {
  private readonly STYLE_ELEMENT_ID = 'pfThemeLoader';
  currentTheme!: string;

  constructor(
    @Optional() @Inject(THEME_LOADER) private themeSettings: ThemeLoaderSettings
  ) {
    if (themeSettings) {
      this.init(themeSettings.themeName as any, themeSettings.isDefault);
    }
  }

  init(themeName: string, isDefault = false) {
    const head = document.getElementsByTagName('head')[0];

    const existingLink = this.getLinkElementById();
    if (this.currentTheme === themeName) {
      return;
    }
    this.currentTheme = themeName;

    if (existingLink) {
      existingLink.href = `${themeName}.css`;
    } else {
      this.setStyle(head, themeName, isDefault);
    }
  }

  restoreDefaultStyle() {
    const existingLink = this.getLinkElementById();
    const defaultStyleToApply = existingLink.getAttribute('data-default-style');
    if (defaultStyleToApply) {
      this.currentTheme = defaultStyleToApply;
      existingLink.href = `${defaultStyleToApply}.css`;
    }
  }

  private getLinkElementById() {
    return document.getElementById(this.STYLE_ELEMENT_ID) as HTMLLinkElement;
  }

  private setStyle(
    head: HTMLHeadElement,
    themeName: string,
    isDefault = false
  ) {
    const link = this.getStyleLink(themeName);
    if (isDefault) {
      link.setAttribute('data-default-style', themeName);
    }
    head.appendChild(link);
  }

  private getStyleLink(themeName: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${themeName}.css`;
    link.id = this.STYLE_ELEMENT_ID;

    return link;
  }
}
