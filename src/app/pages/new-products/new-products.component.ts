import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name : new FormControl (""),
    description : new FormControl (""),
    status : new FormControl (""),
  });
  constructor(private ikszde : FbBaseService) { }
 save(){
this.ikszde.add('products', this.form.value)
 }
  ngOnInit(): void {
  }

}
