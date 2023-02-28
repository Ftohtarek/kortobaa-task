import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/mock/mock.service';
import { Product, Products } from 'src/app/shared/models/product';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';
import { swapAnimation } from '../animate/animate-triger';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [swapAnimation]
})
export class HomeComponent implements OnInit, AfterViewInit {
  products: Product[] = <Product[]>[];
  productCategories = { new: 'new', all: 'all', lastView: 'lastView' }
  activeCatergories = this.productCategories.new;
  smallSize: boolean = false;

  constructor(private productService: MockService, private layout: CdkLayoutService) { }

  ngOnInit(): void {
    this.products = new Products(this.productService.products).products
  }

  ngAfterViewInit(): void {
    this.layout.state$.subscribe((state) => {
      if (state.breakpoints[this.layout.breakPoints.appSmallMode]) {
        this.smallSize = true
      }
      else {
        this.smallSize = false
      }
    })
  }
}
