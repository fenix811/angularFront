import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import Product from '../interfaces/product';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
  providers: [ApiService]
})
export class SiteComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe(res => this.products = res);
  }

  productSelected(product: Product) {
    console.log(product);
    this.selectedProduct = product;
    debugger;
  }

}
