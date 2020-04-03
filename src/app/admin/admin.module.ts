import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './../material/material.module';
import { DashComponent } from './components/dash/dash.component';


@NgModule({
  declarations: [NavComponent, DashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
  ]
})
export class AdminModule { }
