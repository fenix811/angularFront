import { Component, OnInit, Input } from '@angular/core';
import Product from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product = null;

  @Input()
  products: Product[];

  constructor() {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
