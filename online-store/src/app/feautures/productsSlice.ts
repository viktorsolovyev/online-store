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
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8f9d98b352918e8eef3f3a620a3ba987a11dad50-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: '5-Piece Ultimate Tool Set',
            brand: 'GIR',
            price: 64.75,
            sale: 8,
            raiting: 4.9,
            stock: 125,
            description: 'The Mediterranean Set is inspired by coastal hues, earthy tones, and fresh, bright flavors best enjoyed together.'
        },
        {
            id: 2,
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/500fd173ddf4ce3da4a688b0714565c117607b34-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/75b2a5af9de8897eb2e48ce4da24145bb4505d1a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/aa2b51cc129f52dfccbc4d0b78c3be2552e43aa9-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: '850 ml Glass French Press',
            brand: 'Yield Design',
            price: 85,
            sale: 0,
            raiting: 5.0,
            stock: 4,
            description: 'The Yield French Press is made using premium borosilicate glass that is most commonly associated with laboratory glassware and high-end kitchenware. It provides a delicate appearance and superior durability.'
        },
        {
            id: 3,
            categoryId: 1,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/591d56edbbbad0657c253620cc1a5f7e875b47e8-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a120ea718949278036675b878ebf1a8c1e5ed589-1640x1620.jpg?w=1440&h=1422&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9262c6fb59f0c04e7f348b799e4e090fb96a4498-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Tile Sets',
            brand: 'LetterFolk',
            price: 12,
            sale: 0,
            raiting: 5,
            stock: 23,
            description: 'Each set includes 75 silicone hexagon tiles that are interchangeable with any Letterfolk Tile Mat and stored in a dishwasher-safe mesh cotton drawstring bag.'
        },
        {
            id: 4,
            categoryId: 1,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/0a83d793f92558354912d61aac1d6772fa50138e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8095064749d888d9b5ef8c75a9ba8e29ca17155a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Toilet Brush',
            brand: 'Zone Denmark',
            price: 90,
            sale: 15,
            raiting: 3.4,
            stock: 12,
            description: 'The UME bathroom series is a soft, gentle and pleasant acquaintance.'
        },
        {
            id: 5,
            categoryId: 2,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/e98181947ef6399b7f06eecf46fcf249ac80a6a2-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/2d014fec514706164f6b81084eca30f0c20c4837-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/3b25b6ace4fd5bc09dbcb774c51b0b46c60ded14-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Medium Storage Bins',
            brand: 'Open Spaces',
            price: 62,
            sale: 0,
            raiting: 4.6,
            stock: 42,
            description: 'Tidy up any room with multi-purpose storage for the shelf, the pantry, and more'
        },
        {
            id: 6,
            categoryId: 2,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/97af7c1f1e13cb43ce5b5ea4ce0182c34d76e535-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/97af7c1f1e13cb43ce5b5ea4ce0182c34d76e535-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f10d5b21fa646fe4fcc5c020a8746dc8c1727332-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Capsule Placemat',
            brand: 'Slash Objects',
            price: 35,
            sale: 0,
            raiting: 5,
            stock: 4,
            description: 'Fun shaped, heat resistant recycled rubber placemat protects tabletops from hot pans and pots.'
        },
        {
            id: 7,
            categoryId: 3,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/6450ad87e414c4cf6b838f8840cb696cf0230f35-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/6450ad87e414c4cf6b838f8840cb696cf0230f35-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',],
            title: 'Tradescantia nanouk',
            brand: 'Rooted',
            price: 19,
            sale: 10,
            raiting: 4.9,
            stock: 1,
            description: `This plant has colorful leaves that are delicately striped with pink variegation. The foliage cascades, so it prefers to be the highest in the room. With the right conditions, the Tradescantia Nanouk grows star-shaped flowers that bloom spring through fall.`,
        },
        {
            id: 8,
            categoryId: 3,
            image:'https://cdn.sanity.io/images/nmk5oubi/production/d8c302dd0f24dcd622f6fd0055ff405f3d681ed3-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/d8c302dd0f24dcd622f6fd0055ff405f3d681ed3-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f6eeb50f963590c80948afb7e20de6d556759a9c-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/51cb172f17b88310fe0f2fce9c1c055ad9642e53-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Vase',
            brand: 'Paul Arhold Glass',
            price: 295,
            sale: 0,
            raiting: 5,
            stock: 12,
            description: `Each Paul Arnhold vase is carefully hand blown and shaped, and can stand artfully on its own or dressed with flowers.`,
        },
        {
            id: 9,
            categoryId: 4,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/a693f00f6f3d02d9ae5b6bfb2067a5cb6f831464-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/a693f00f6f3d02d9ae5b6bfb2067a5cb6f831464-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/5c1ad1883cebddd88dacf36d4224461c8ac5e319-1920x1620.jpg?w=1440&h=1215&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/7c071eb458c7b494824ce9e3cafcf66867241c0e-1920x1620.jpg?w=1440&h=1215&auto=format&q=85'],
            title: 'Shelf Risers',
            brand: 'Open Spaces',
            price: 72,
            sale: 0,
            raiting: 4.9,
            stock: 152,
            description: `Easily double the surface area on counters, in cabinets, or any open shelving area`,
        },
        {
            id: 10,
            categoryId: 5,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/9925243c727037bd2718e6b480b9e62b38cb32c1-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/9925243c727037bd2718e6b480b9e62b38cb32c1-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9d6ed124a43fa2280fb8f15e52deccb5a1d51689-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a91bc041eeef1e19dd2de6f6c143252d221ed69d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Hug Me Pillow',
            brand: 'LetterFolk',
            price: 56,
            sale: 0,
            raiting: 5,
            stock: 120,
            description: `Handmade with 100% organic alpaca wool in Peru, these Hug Me Pillows are beautifully designed and handcrafted in three different color options.`,
        },
        {
            id: 11,
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/5580d4dbbd7e54c7f29d97b5f58d41ae60a68e0d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/5580d4dbbd7e54c7f29d97b5f58d41ae60a68e0d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/457c868221ac38e3e2f5578767d87d668bc2b234-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/44125e93eb15a47bf4d34c2ba0c2cafe7d1dc230-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/e7a841bc7bfeccc0e1163bf169f6afe664f11560-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Spoonula',
            brand: 'GIR',
            price: 12.95,
            sale: 0,
            raiting: 4.9,
            stock: 208,
            description: `Part spoon, part spatula—this multi-purpose kitchen utensil does it all. It scrapes, scoops, and serves up whatever dish your heart desires. Moves effortlessly between cooking and baking or sweet and savory.`,
        },
        {
            id: 12,
            categoryId: 7,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/7f7deec869611c9151917cf170494120e88c1066-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/7f7deec869611c9151917cf170494120e88c1066-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/5a2c06ce74cb05d010629b1a0ba35d9c3a45bcb4-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/c2518ab1c4dc4fd51f9fcb678da90889ac995592-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Paradise Found Puzzle',
            brand: 'PieceWork Puzzles',
            price: 38,
            sale: 0,
            raiting: 4.1,
            stock: 6,
            description: `This candlelit, baroque still life goes all-in on drama, rich colors, and indulgence.`,
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