import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import Product from './interfaces/product';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:61885/api/';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/product');
  }
}
