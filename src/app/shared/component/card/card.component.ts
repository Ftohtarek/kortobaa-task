import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

// init Swiper:
@Component({
  selector: 'productCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private render: Renderer2) { }
  @Input('isLastView') isLastView: boolean = false;
  productImgUrl: string = ''

  ngOnInit(): void {
    this.productImgUrl = `url(../../../../assets/pic.png)`
  }


}

