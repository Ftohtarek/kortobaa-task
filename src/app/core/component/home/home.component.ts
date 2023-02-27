import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/mock/mock.service';
import { Product, Products } from 'src/app/shared/models/product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = <Product[]>[];
  constructor(private productService: MockService) { }
  ngOnInit(): void {
    this.products = new Products(this.productService.products).products
    console.table(this.products)
  }
}
