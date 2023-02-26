import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { CardComponent } from './component/card/card.component';
import { EgyCurrencyPipe } from './pipe/egy-currency.pipe';
import { RatingComponent } from './component/rating/rating.component';



@NgModule({
  declarations: [
    CardComponent,
    EgyCurrencyPipe,
    RatingComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CardComponent,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
