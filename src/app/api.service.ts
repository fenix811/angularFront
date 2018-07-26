import { Injectable } from '@angular/core';
import { HttpClient, Response} from '@angular/common/http';

const API_URL = 'http://localhost:61885/api/';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }
  getProducts() {
    return this.http.get('/api/getProducts')
      .map((res: Response) => res.json());
  }
}
