import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SlideNavComponent } from './component/slide-nav/slide-nav.component';
import { CoreRoutingModule } from './core-routing.module';
import { CaptionSliderComponent } from './component/caption-slider/caption-slider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SlideNavComponent,
    NotfoundComponent,
    CaptionSliderComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent
    ]
})
export class CoreModule { }

