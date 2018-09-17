import { Component, OnInit, Input } from '@angular/core';
import Product from '../interfaces/product';
import Company from '../interfaces/company';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  companies: Company[];
  @Input()
  product: Product;

  constructor() {
    this.companies = [{id: 1, name: 'qwe'}, {id: 2, name: 'asd'}];
  }

  ngOnInit() {
  }

}
