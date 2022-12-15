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
    ],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export const getAllProducts = ((state: RootState) => state.products.products);
export default productSlice.reducer;