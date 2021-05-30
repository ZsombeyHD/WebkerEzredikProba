import { MatIconModule } from '@angular/material/icon';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SplashScreenModule { }
