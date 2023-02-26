import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { CardComponent } from './component/card/card.component';



@NgModule({
  declarations: [
    CardComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
