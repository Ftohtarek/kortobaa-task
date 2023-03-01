import { Component, OnInit } from '@angular/core';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // propery require to handle sidebar apperance
  
  smallSize?: boolean;
  openSideBar: boolean = false;
  waiting: boolean = true
  /* property used to handle sticky navbar */
  navbarToggle: boolean = true
  scrollTop: any;
  TimeOut: any;

  constructor(private layout: CdkLayoutService) { }
  ngOnInit(): void {
    // shoud be resbonse on categery from serve
    setTimeout(() => {
        this.waiting=false
    }, 3000);
    this.layout.isSmallMode.subscribe(isTabletMode => this.smallSize = isTabletMode)
  }
  /* trace sticky scroll Navbar will scrolling  */
  onWindowScroll() {
    clearTimeout(this.TimeOut)

    this.scrollTop = document.documentElement.scrollTop
    this.navbarToggle = true
    /* if scroll in top of page stop disapper of navbar */
    this.scrollTop < 40 ? null : this.TimeOut =
      setTimeout(() => {
        this.navbarToggle = false;
      }, 4000);

  }

  // listen if SideNavbar close 
  trackSidebar(state: boolean) {
    document.body.style.overflow = 'scroll'
    this.openSideBar = state
  }

  openSideBarFn() {
    this.openSideBar = true
    document.body.style.overflow = 'hidden'
  }


}
