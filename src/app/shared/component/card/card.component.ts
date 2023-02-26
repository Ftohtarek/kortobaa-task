import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'productCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @ViewChild('rating') rating?: ElementRef;

  constructor(private render: Renderer2) { }
  ngAfterViewInit(): void {

  }
  setRating(index: Number) {
    const ratingElement: HTMLElement[] = Array.from(this.rating?.nativeElement.children)
    ratingElement.forEach((element, i) => index <= i ?
      this.render.setStyle(element, 'color', '#ffe621') : this.render.setStyle(element, 'color', '#eaeaea')
    );
  }
}
