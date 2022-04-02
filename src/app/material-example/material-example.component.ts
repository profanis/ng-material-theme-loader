import { Component, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-material-example',
  templateUrl: './material-example.component.html',
  styleUrls: ['./material-example.component.scss'],
})
export class MaterialExampleComponent {}

@NgModule({
  declarations: [MaterialExampleComponent],
  imports: [MatBadgeModule, MatButtonModule, MatDividerModule],
  exports: [MaterialExampleComponent],
})
export class MaterialExampleComponentModule {}
