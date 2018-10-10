import { Component, OnInit, Input } from '@angular/core';
import Product from '../interfaces/product';
import Company from '../interfaces/company';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ApiService]
})
export class ProductDetailsComponent implements OnInit {
  companies: Company[];
  @Input()
  public product: Product;

  constructor(private apiService: ApiService) {
    this.companies = [{ id: 1, name: 'qwe' }, { id: 2, name: 'asd' }];
  }

  ngOnInit() {
  }
  save() {
    console.log(this.product);
    debugger;
  }

}
