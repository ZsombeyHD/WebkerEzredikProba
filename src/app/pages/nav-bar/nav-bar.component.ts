import { CATEGORIES } from './../../shared/db/categories';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
