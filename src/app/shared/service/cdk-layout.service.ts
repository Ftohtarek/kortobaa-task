import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, EventEmitter } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*this service resbonse to handle media query i just use custom mode appSmallMode  */
export class CdkLayoutService {
  private appSmallMode = "(max-width: 768px)";
  /**
   * @observable return with boolean value that indicate tablet mode
   */

  public isSmallMode: Observable<any>

  constructor(private obsrever: BreakpointObserver) {
    this.isSmallMode = this.obsrever
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, this.appSmallMode])
      .pipe(map(state => state.breakpoints[this.appSmallMode] ? true : false))
  }



}
