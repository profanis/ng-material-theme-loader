import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialExampleComponentModule } from '../material-example/material-example.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialExampleComponentModule],
})
export class AdminModule {}
