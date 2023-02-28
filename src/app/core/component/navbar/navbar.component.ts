import { Component, AfterViewInit } from '@angular/core';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  navbarToggle: boolean = true
  TimeOut: any;
  scrollTop: any;
  smallSize: boolean = false;
  openSideBar: boolean = false;
  constructor(private layout: CdkLayoutService) { }

  /* sticky scroll Navbar */
  onWindowScroll() {
    this.scrollTop = document.documentElement.scrollTop
    clearTimeout(this.TimeOut)
    if (this.scrollTop < 40)
      return this.navbarToggle = true;

    this.navbarToggle = true
    return this.TimeOut = setTimeout(() => {
      this.navbarToggle = false;
    }, 3000);

  }
  // listen if navbar close 
  trackSidebar(state: boolean) {
    document.body.style.overflow = 'scroll'
    this.openSideBar = state
  }

  openSideBarFn(){
    this.openSideBar =true
    document.body.style.overflow = 'hidden'
  }
  
  ngAfterViewInit(): void {
    this.layout.state$.subscribe((state) => {
      if (state.breakpoints[this.layout.breakPoints.XSmall]) {
        this.smallSize = true
      }
      else {
        this.smallSize = false
      }
    })
  }

}
