import { Component } from '@angular/core';
import { ThemeLoaderService } from '@theme-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private themeLoaderService: ThemeLoaderService) {}

  switchTheme() {
    if (this.themeLoaderService.currentTheme === 'dark-theme') {
      this.themeLoaderService.init('light-theme');
    } else {
      this.themeLoaderService.init('dark-theme');
    }
  }
}
