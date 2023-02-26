import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { CardComponent } from './component/card/card.component';
import { EgyCurrencyPipe } from './pipe/egy-currency.pipe';



@NgModule({
  declarations: [
    CardComponent,
    EgyCurrencyPipe
    
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
