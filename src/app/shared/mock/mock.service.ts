import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
    providedIn: 'root'
})
export class MockService {
    constructor() { }
    products: Product[] = [
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/lastView/pic.png',
            isFavorite: true,
            price: 90,
            rating: 2,
            isViewBefor: true,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/lastView/pic1.png',
            isFavorite: false,
            price: 90,
            rating: 3,
            isViewBefor: true,
            discountPersantage:10,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/lastView/pic2.png',
            isFavorite: true,
            price: 90,
            rating: 2,
            isViewBefor: true,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic.png',
            isFavorite: false,
            price: 90,
            rating: 1,
            isViewBefor: false,
            discountPersantage:40,

        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 3,
            isViewBefor: false,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic2.png',
            isFavorite: false,
            price: 90,
            rating: 0,
            isViewBefor: false,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic3.png',
            isFavorite: false,
            price: 90,
            rating: 2,
            isViewBefor: false,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 5,
            isViewBefor: false,
            discountPersantage: 2,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 3,
            isViewBefor: false,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic2.png',
            isFavorite: false,
            price: 90,
            rating: 0,
            isViewBefor: false,
        },
        {
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: '../../../assets/newProduct/pic3.png',
            isFavorite: false,
            price: 90,
            rating: 2,
            isViewBefor: false,
        },

    ]
}
