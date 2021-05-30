import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductsComponent } from './edit-products.component';
import { EditProductsRoutingModule } from './edit-products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EditProductsComponent
  ],
  imports: [
    CommonModule,
    EditProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class EditProductsModule { }
