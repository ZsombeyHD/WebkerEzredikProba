import { FbBaseService } from './../../../services/fb-base.service';
import { ProductFields } from './../../../shared/models/product-fields';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() product?: ProductFields; 
  constructor(private ikszde: FbBaseService) { }
  ngOnInit(): void {
  }
deleteProduct(id:any){
  this.ikszde.delete('products', id);
}
}
