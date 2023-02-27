import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarToggle: boolean = true
  TimeOut: any;
  scrollTop: any;
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
}
