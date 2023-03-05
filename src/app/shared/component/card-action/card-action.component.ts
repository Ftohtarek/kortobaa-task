import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { addToCart, isFavoriteToggle } from 'src/app/AppStore/app.actions';
import { rollAnimation, swapAnimation } from 'src/app/core/component/animate/animate-triger';
import { CartModel } from '../../models/cart';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product.interface';
@Component({
  selector: 'card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
  animations: [rollAnimation]
})
export class CardAction {
  @Input('product') product: Product = <Product>{};
  @Input('isSmallCard') isSmallCard: boolean = false;
  cart: CartModel = <CartModel>{}

  inCart: number=0


  constructor(private store: Store<{ AppStore: IAppStore }>) {
    store.select('AppStore').subscribe(store => {
      this.cart = new CartModel(store.cart.items)
      console.log('quantity:' ,this.cart.getProductQuantity(this.product));      
      this.inCart = this.cart.getProductQuantity(this.product)
            
    })
  }

  addToCart() {
    this.store.dispatch(addToCart({ cartItem: new CartItem(this.product, 1) }))
  }

  isFavoriteAction() {
    this.store.dispatch(isFavoriteToggle({ productId: this.product.id }))
  }


}

