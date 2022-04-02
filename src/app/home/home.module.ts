import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MaterialExampleComponentModule } from '../material-example/material-example.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatButtonModule, MaterialExampleComponentModule],
  exports: [HomeComponent],
})
export class HomeModule {}
