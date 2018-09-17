import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // selectedProduct: Product;

  @Input()
  products: Product[];

  @Output() 
  productSelect: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  onSelect(product: Product): void {
    // this.selectedProduct = product;
    this.productSelect.emit(product);
  }

}
