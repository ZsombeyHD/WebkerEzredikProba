import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [DefaultComponent]
})
export class DefaultModule { }
