import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Product } from '../../models/product';

// init Swiper:
@Component({
  selector: 'productCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private render: Renderer2) { }
  @Input('product') product: Product = <Product>{};
  productImgUrl: string = ''

  ngOnInit(): void {
    this.product.discountPersantage
  }


}

