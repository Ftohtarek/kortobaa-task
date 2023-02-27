import { NgModule } from '@angular/core';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
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
