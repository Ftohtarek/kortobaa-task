import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'caption-slider',
  templateUrl: './caption-slider.component.html',
  styleUrls: ['./caption-slider.component.scss']
})
export class CaptionSliderComponent implements OnInit {
  @Input('imgList') imgList: string[] = []

  index: number = 0
  nextIndex: number = 1
  direction = 'right';
  swap: boolean = false;
  autoSlideTimer: any;
  ngOnInit(): void {
    this.autoSlide()
  }

  next() {
    this.checkSwap('left')
    this.direction = 'right';

    this.waiting(() => {
      this.imgList.length - 1 == this.index ? this.index = 0 : this.index += 1
      this.imgList.length - 1 == this.nextIndex ? this.nextIndex = 0 : this.nextIndex += 1
    })

  }

  pervious() {
    this.checkSwap('right')
    this.direction = 'left';

    this.waiting(() => {
      this.index == 0 ? this.index = this.imgList.length - 1 : this.index -= 1
      this.nextIndex == 0 ? this.nextIndex = this.imgList.length - 1 : this.nextIndex -= 1
    })

  }

  /**
   *@implementaion resbonse to generater slide action in specific time
   */

  autoSlide() {
    this.autoSlideTimer = setInterval(() => {
      this.next()
      this.direction = 'right'
    }, 1000 * 10)
  }

    /**
   *@implementaion clear old auto slide and genenrate new one
   */
  restartAutoSlide() {
    clearInterval(this.autoSlideTimer)
    this.autoSlide()
  }

  /**
   * @callback changePosition should check the direction of the movement.
   * @implements  Wait for 10ms:to ensure that the current position is stable.
   * @summary Waiting for 10ms before changing position is crucial to ensure that the direction is correct.
  */
  waiting(changePosition = () => { }) {
    setTimeout(() => {
      if (!this.swap) {
        //code impelement here ...... !
        changePosition()
      }
    }, 10);
  }

  /**
   * @issue When an action comes after reversing the direction, the index is already changed. 
   * It can be confusing to detect the click direction in such a situation. 
   * 
   * @solution Use swapping:When an action comes after reversing the direction,
   *  swap the indices to indicate that the click direction has changed
   * 
   * @param initialDirection parameter used to detect the direction that you want to check reverse To swap on it in the function
   */
  checkSwap(initialDirection: string) {
    this.swap = this.direction == initialDirection ? true : false
    this.direction = '';

    this.restartAutoSlide()
  }


}
