export interface Product {
    title: string;
    imgUrl: string;
    rating: number;
    price: number;
    isFavorite: boolean;
    discountPersantage?: number;
    isViewBefor?: boolean;
    discountPrice?: number
}

export class Products {
    constructor(public products: Product[]) {
        this.products.map(product => this.productMapping(product))
    }

    private productMapping(product: Product): Product {
        /* do any logic you want here for product  */
        product.discountPersantage ? product.discountPrice = this.calcDiscountPrice(product) : null
        return product
    }

    private calcDiscountPrice = (product: Product): number =>
        product.price - (product.price * <number>product.discountPersantage / 100)
}
