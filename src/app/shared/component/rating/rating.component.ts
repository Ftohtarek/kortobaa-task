import { Component, ElementRef, ViewChild, Renderer2, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements AfterViewInit {
  @ViewChild('rating') rating?: ElementRef;
  @Input('rate') rate: number = 0


  constructor(private render: Renderer2) { }
  ngAfterViewInit(): void {
    this.setRating(this.rate)
  }

  setRating(index: Number) {
    console.log(index);
    
    const ratingElement: HTMLElement[] = Array.from(this.rating?.nativeElement.children)
    ratingElement.forEach((element, i) => index >= i ?
      this.render.setStyle(element, 'color', '#ffe621') : this.render.setStyle(element, 'color', '#eaeaea')
    );
  }
}
