import { createReducer, on } from '@ngrx/store';
import { AppStore } from './app-initial-state';
import { changeRating, isFavoriteToggle } from './app.actions';

export const productReducer = createReducer(
    AppStore,
    on(isFavoriteToggle, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.productId);
        const products = [...state.products];
        products[index] = { ...products[index], isFavorite: !products[index].isFavorite };
        return { ...state, products };
    }),

    on(changeRating, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.productId);
        const products = [...state.products];
        products[index] = { ...products[index], rating: action.rate }
        return { ...state, products }
    }),

    on(changeRating, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.productId);
        const products = [...state.products];
        products[index] = { ...products[index], rating: action.rate }
        return { ...state, products }
    })
)


export const cartReducer = createReducer(
    AppStore,
    
)
