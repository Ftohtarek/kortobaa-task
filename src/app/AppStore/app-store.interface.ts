import { Product } from "../shared/models/product.interface";

export interface IAppStore {
    products: Product[],
    backgroundImage: string[],
    cart: {}
}