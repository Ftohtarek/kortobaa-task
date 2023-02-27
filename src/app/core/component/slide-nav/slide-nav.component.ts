import { Component, Input, Output, EventEmitter } from '@angular/core';
import { slideInOutAnimation } from '../animate/animate-triger'
@Component({
  selector: 'slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss'],
  animations: [slideInOutAnimation]
})

export class SlideNavComponent {
  @Input('open') open: boolean = false
  @Output('sideState') state = new EventEmitter()
  stopScrolling() {
    this.open ?
      document.body.style.overflow = 'hidden' :
      document.body.style.overflow = 'scroll'

  }
  close() {
    this.open = false
    this.state.emit(false)
    document.body.style.overflow = 'scroll'

  }
}
