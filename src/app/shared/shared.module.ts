import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './component/card/card.component';
import { CardAction } from './component/card-action/card-action.component';
import { RatingComponent } from './component/rating/rating.component';
import { MaterialModule } from './material.module';
import { EgyCurrencyPipe } from './pipe/egy-currency.pipe';
import { QuantityComponent } from './component/quantity/quantity.component';

@NgModule({
  declarations: [
    CardComponent,
    EgyCurrencyPipe,
    RatingComponent,
    CardAction,
    QuantityComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  exports: [
    CardComponent,
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule {

}
