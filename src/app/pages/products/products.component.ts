import { Component, OnInit } from '@angular/core';
import { FbBaseService } from './../../services/fb-base.service';
import { ProductFields } from './../../shared/models/product-fields';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  list?: Observable<ProductFields[]>;
  constructor(private ikszde: FbBaseService) { }
  get(){
    this.list = this.ikszde.get("products");
  }
  ngOnInit(): void {
    this.get();
  }

}
