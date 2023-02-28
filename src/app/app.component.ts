import { AfterViewInit, Component, Output, EventEmitter } from '@angular/core';
import { CdkLayoutService } from './shared/service/cdk-layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'kortobaa';
  @Output('isSmallSize') isSmallSize?: boolean
  constructor(private layout: CdkLayoutService) { }

  ngAfterViewInit(): void {
    this.layout.state$.subscribe((state) => {
      if (state.breakpoints[this.layout.breakPoints.appSmallMode]) {
        this.isSmallSize = true
      }
      else {
        this.isSmallSize = false
      }
    })
  }

}
