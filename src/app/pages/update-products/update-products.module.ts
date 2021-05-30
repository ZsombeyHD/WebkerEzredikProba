import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductsComponent } from './update-products.component';
import { UpdateProductsRoutingModule } from './update-products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Default2Module } from './default2/default2.module';




@NgModule({
  declarations: [
    UpdateProductsComponent
  ],
  imports: [
    CommonModule,
    UpdateProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    Default2Module
  ],
  exports: [UpdateProductsComponent]
})
export class UpdateProductsModule { }
