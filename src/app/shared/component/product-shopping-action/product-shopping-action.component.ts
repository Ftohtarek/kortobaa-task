import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-shopping-action',
  templateUrl: './product-shopping-action.component.html',
  styleUrls: ['./product-shopping-action.component.scss']
})
export class ProductShoppingActionComponent {
  @Input('isFavorite') isFavorite: boolean = false;
  @Input('isAdd') isAdd: boolean = false;
  @Input('isLastView') isLastView: boolean = false;
  addToCart() {
    this.isAdd = true
    // should call cart service and send request that add product
  }
}

