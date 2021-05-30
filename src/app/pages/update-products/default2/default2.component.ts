import { Component,Input, OnInit } from '@angular/core';
import { ProductFields } from './../../../shared/models/product-fields';


@Component({
  selector: 'app-default2',
  templateUrl: './default2.component.html',
  styleUrls: ['./default2.component.scss']
})
export class Default2Component implements OnInit {
  @Input() product?: ProductFields; 
  constructor() { }
  ngOnInit(): void {
  }
}
