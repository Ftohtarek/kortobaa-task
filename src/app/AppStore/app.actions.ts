import { createAction, props } from '@ngrx/store';
import { Product } from '../shared/models/product.interface';

export const isFavoriteToggle = createAction('[productAction Component] isFavoriteToggle', props<{ productId:number }>());
export const changeRating = createAction('[productAction Component] changeRating', props<{ productId: number, rate: number }>());
export const addToCart = createAction('[Counter Component] addToCart', props<{ product: Product }>());

