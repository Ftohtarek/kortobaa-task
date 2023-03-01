import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { ProductShoppingActionComponent } from './component/product-shopping-action/product-shopping-action.component';
import { RatingComponent } from './component/rating/rating.component';
import { MaterialModule } from './material.module';
import { EgyCurrencyPipe } from './pipe/egy-currency.pipe';



@NgModule({
  declarations: [
    CardComponent,
    EgyCurrencyPipe,
    RatingComponent,
    ProductShoppingActionComponent,

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
export class SharedModule { }
