import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductsComponent } from './new-products.component';
import { NewProductsRoutingModule } from './new-products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NewProductsComponent
  ],
  imports: [
    CommonModule,
    NewProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class NewProductsModule { }
