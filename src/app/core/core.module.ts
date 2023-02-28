import { NgModule } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { SlideNavComponent } from './component/slide-nav/slide-nav.component';
import { NotfoundComponent } from './component/notfound/notfound.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SlideNavComponent,
    NotfoundComponent
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
