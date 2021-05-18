import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product, ProductService} from './catalog.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit{
  products: Product[] = [];
  error = '';

  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    this.productService.fetchProducts()
    .subscribe(products => {
      this.products = products;
      this.loading = false;
  }, error => {
      this.error = error.message; // ouput error
    });

}
}
