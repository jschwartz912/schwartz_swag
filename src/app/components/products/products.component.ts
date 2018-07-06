import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  filteredProducts: Product[] = [];
  filter: Filter;
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.filter = this.productService.getFilter();
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
      this.filteredProducts = this.products;
      products.forEach(product => {
        if (!this.categories.includes(product.product_category)) {
          this.categories.push(product.product_category);
        }
      });
    });
  }

  updateProducts() {
    this.filteredProducts = this.products.filter(
      product => product.product_category === this.filter.category
    );
  }

  searchToggle() {
    document.querySelector('.search-wrapper').classList.toggle('active');
  }

  updateCategory(category: string) {
    const catOptions = document.querySelectorAll('.cat-option');
    for (let i = 0; i < catOptions.length; ++i) {
      if (category === catOptions[i].textContent) {
        catOptions[i].classList.toggle('active');
      } else {
        catOptions[i].classList.remove('active');
      }
    }

    if (category === this.filter.category) {
      this.productService.updateCategory('');
      this.filteredProducts = this.products;
    } else {
      this.productService.updateCategory(category);
      this.updateProducts();
    }
  }

  openModal(product: Product) {
    this.selectedProduct = product;
  }
}
