import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdkLayoutService {
  state$: Observable<any>
  breakPoints;
  private appSmallMode = "(max-width: 768px)";
  constructor(private obsrever: BreakpointObserver) {
    this.state$ = this.obsrever.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, this.appSmallMode])
    this.breakPoints = { ...Breakpoints, appSmallMode: this.appSmallMode }
  }
}
