import { NgModule } from '@angular/core';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { SlideNavComponent } from './component/slide-nav/slide-nav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SlideNavComponent
  ],
  imports: [
    SharedModule,
    
  ],
  exports:[
    NavbarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
