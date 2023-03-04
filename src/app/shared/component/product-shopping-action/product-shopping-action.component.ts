import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { isFavoriteToggle } from 'src/app/AppStore/app.actions';
import { Product } from '../../models/product.interface';
@Component({
  selector: 'product-shopping-action',
  templateUrl: './product-shopping-action.component.html',
  styleUrls: ['./product-shopping-action.component.scss']
})
export class ProductShoppingActionComponent {
  @Input('product') product: Product = <Product>{};
  @Input('isAdd') isAdd: boolean = false;
  @Input('isSmallCard') isSmallCard: boolean = false;
  constructor(private store: Store<{ AppStore: IAppStore }>) { }

  addToCart() {
    this.isAdd = true
  }

  isFavoriteAction() {
    this.store.dispatch(isFavoriteToggle({ productId: this.product.id }))
  }
  

}

