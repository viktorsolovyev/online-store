import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";
import { RootState } from "../store";

interface MainProductsProps {
    products: IProduct[];
}

const initialState: MainProductsProps = {
    products: [
        {
            id: 1,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a7469637239a848ccb2c84_oxo-steel-salad-spinner-p-800.png',
            title: 'Steel Salad Spinner',
            brand: 'OXO',
            price: 65,
            sale: 0,
            raiting: 4.7,
            stock: 125,
            description: 'Hasami Porcelain blends modern design with the almost 400-year-old pottery tradition of the town of Hasami in Japan. These bowls feature an eye-catching cylindrical design with rounded inner edges and a gloss finish. Like all Hasami pieces, they are modular and stackable.'
        },
        {
            id: 2,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a745e13fa7864fc9dc5d65_hasami-bowl.png',
            title: 'Gloss Gray Bowl',
            brand: 'Hasami Porcelain',
            price: 40,
            sale: 5,
            raiting: 4.2,
            stock: 4,
            description: 'Hasami Porcelain blends modern design with the almost 400-year-old pottery tradition of the town of Hasami in Japan. These bowls feature an eye-catching cylindrical design with rounded inner edges and a gloss finish. Like all Hasami pieces, they are modular and stackable.'
        },
        {
            id: 3,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a745757b02836dd398e170_hasami-plate-p-800.png',
            title: 'Gloss Gray Plate',
            brand: 'Hasami Porcelain',
            price: 60,
            sale: 0,
            raiting: 3.4,
            stock: 23,
            description: 'Hasami Porcelain blends modern design with the almost 400-year-old pottery tradition of the town of Hasami in Japan. These plates feature a beautiful and stackable design with a gloss finish.'
        },
        {
            id: 4,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a7453372553e3ece76d2a9_oxo-nylon-flexible-turner-p-800.png',
            title: 'Nylon Flexible Turner',
            brand: 'OXO',
            price: 10,
            sale: 15,
            raiting: 5,
            stock: 12,
            description: 'The Nylon Flexible Turner is a non-stick safe spatula with a thin and flexible nylon head that is perfect for flipping all kinds of foods while keeping them intact. Like other products from the Good Grips family, the handle is soft, comfortable, and non-slip.'
        },
        {
            id: 5,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a8c556837e3132715c56dd_wp-porter-bowl.png',
            title: 'Porter Bowl',
            brand: 'W&P',
            price: 20,
            sale: 0,
            raiting: 4.7,
            stock: 42,
            description: 'The Porter Bowl is a simple and ultralight lunchbox that makes it easy to take your food wherever you go, whether that’s the office or the beach. The plastic base is wrapped with soft protective silicon, which makes it a joy to eat from. It’s also microwave and dishwasher safe.'
        },
        {
            id: 6,
            categoryId: 1,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/620cd8348a0a9385004248a8_tweezerman-classic-slant-tweezer-p-1080.png',
            title: 'Classic Slant Tweezer',
            brand: 'Tweezerman',
            price: 18,
            sale: 0,
            raiting: 4.1,
            stock: 4,
            description: 'Made of stainless steel, the Tweezerman slant tweezers feature hand-filed supersharp tips, providing ultimate precision and grip to pluck even the trickiest hairs with ease.'
        },
        {
            id: 7,
            categoryId: 4,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/62a75896c2401776168bf3dd_kinto-to-go-tumbler.png',
            title: 'To Go Tumbler',
            brand: 'Kinto',
            price: 49,
            sale: 10,
            raiting: 4.9,
            stock: 1,
            description: `The Kinto To Go Tumbler is an ideal commuter tumbler. It's made of stainless steel and vacuum insulated, retaining the temperature and flavor of drinks. It also features a tapered design and powder coating to ensure a good grip on the go`,
        },
        {
            id: 8,
            categoryId: 3,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/620cd67ec9febdd22a64bafe_incase-nylon-accessory-organizer-p-800.png',
            title: 'Nylon Accessory Organizer',
            brand: 'Incase',
            price: 48,
            sale: 0,
            raiting: 5,
            stock: 12,
            description: `The Incase Nylon Accessory Organizer is a water-resistant bag that’s the perfect size to take your essential gear anywhere. It features different accessory pouches and slips that can hold everything from cables and chargers to pens, including a padded pocket to protect more delicate items.`,
        },
        {
            id: 9,
            categoryId: 2,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/620cd5056683f9b1d0acd26b_oxo-brush-palm-brush-storage-set-p-800.png',
            title: 'Palm Brush Storage Set',
            brand: 'OXO',
            price: 12,
            sale: 15,
            raiting: 4.1,
            stock: 49,
            description: `The OXO Palm Brush Storage Set is the perfect solution to enjoy a clutter-free counter. The brush dispenses soap with a gentle push and comes with a replaceable head made with nylon bristles, safe for non-stick cookware.`,
        },
        {
            id: 10,
            categoryId: 1,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/618fea968ec46f277739020f_1d710302-p-800.png',
            title: 'Bath Towel Set',
            brand: 'Onsen',
            price: 75,
            sale: 0,
            raiting: 4.9,
            stock: 120,
            description: `The Kinto To Go Tumbler is an ideal commuter tumbler. It's made of stainless steel and vacuum insulated, retaining the temperature and flavor of drinks. It also features a tapered design and powder coating to ensure a good grip on the go`,
        },
        {
            id: 11,
            categoryId: 5,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/618fea96b0a2171b766f48f0_57b81eb9-p-800.png',
            title: 'AirPods Pro',
            brand: 'Apple',
            price: 229,
            sale: 0,
            raiting: 5,
            stock: 2,
            description: `The Incase Nylon Accessory Organizer is a water-resistant bag that’s the perfect size to take your essential gear anywhere. It features different accessory pouches and slips that can hold everything from cables and chargers to pens, including a padded pocket to protect more delicate items.`,
        },
        {
            id: 12,
            categoryId: 5,
            image: 'https://uploads-ssl.webflow.com/60feafdac3e33ed6180205f3/618fea956c2e5705bca9c497_3eafacac-p-800.png',
            title: '2021 Kindle Paperwhite',
            brand: 'Amazon',
            price: 110,
            sale: 0,
            raiting: 4.1,
            stock: 6,
            description: `The OXO Palm Brush Storage Set is the perfect solution to enjoy a clutter-free counter. The brush dispenses soap with a gentle push and comes with a replaceable head made with nylon bristles, safe for non-stick cookware.`,
        },
    ],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
})

export const getAllProducts = ((state: RootState) => state.products.products);
export default productSlice.reducer;