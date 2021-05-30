import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Default2Component } from './default2.component';



@NgModule({
  declarations: [
    Default2Component
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [Default2Component]
})
export class Default2Module { }
