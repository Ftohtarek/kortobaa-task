import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { addMore, subtract } from 'src/app/AppStore/app.actions';

@Component({
  selector: 'product-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input('isSmallCard') isSmallCard = false;
  @Input('productQuantity') quantity?: number
  @Input('productId') productId: number = 0
  constructor(private store: Store<{ AppStore: IAppStore }>) { }

  addation() {
    this.store.dispatch(addMore({ productId: this.productId }))
  }
  subtract() {
    this.store.dispatch(subtract({ productId: this.productId }))

  }
}
