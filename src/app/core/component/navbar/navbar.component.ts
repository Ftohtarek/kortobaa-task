import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  @Input('smallSize') smallSize?: boolean;
  navbarToggle: boolean = true
  TimeOut: any;
  scrollTop: any;

  openSideBar: boolean = false;
  constructor() { }

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
  

}
