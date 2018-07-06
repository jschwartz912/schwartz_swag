import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Filter } from '../models/Filter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<Product[]>;
  filter: Filter = {
    category: '',
    min_price: '0',
    max_price: '500',
    search: ''
  };

  productsUrl = 'https://my.api.mockaroo.com/product_catalog.json?key=866ae800';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getFilter(): Filter {
    return this.filter;
  }

  updateCategory(value): Filter {
    this.filter.category = value;
    return this.filter;
  }
}
