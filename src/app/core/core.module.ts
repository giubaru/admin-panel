import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessService } from './services/process/process.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProcessService]
})
export class CoreModule { }
