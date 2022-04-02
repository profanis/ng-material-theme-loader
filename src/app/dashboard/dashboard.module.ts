import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialExampleComponentModule } from './../material-example/material-example.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialExampleComponentModule,
  ],
})
export class DashboardModule {}
