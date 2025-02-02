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
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/4f6d518d83cef246be3516cfc00b09161d15014e-1620x1680.jpg?w=1440&h=1493&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8f9d98b352918e8eef3f3a620a3ba987a11dad50-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: '5-Piece Ultimate Tool Set',
            brand: 'GIR',
            brandId: 1,
            price: 64,
            sale: 8,
            raiting: 4.9,
            stock: 125,
            description: 'The Mediterranean Set is inspired by coastal hues, earthy tones, and fresh, bright flavors best enjoyed together.'
        },
        {
            id: 2,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/492642c99605c45988c8ce0950bd49fb4c707214-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/500fd173ddf4ce3da4a688b0714565c117607b34-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/75b2a5af9de8897eb2e48ce4da24145bb4505d1a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/aa2b51cc129f52dfccbc4d0b78c3be2552e43aa9-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: '850 ml Glass French Press',
            brand: 'Yield Design',
            brandId: 2,
            price: 85,
            sale: 0,
            raiting: 5.0,
            stock: 4,
            description: 'The Yield French Press is made using premium borosilicate glass that is most commonly associated with laboratory glassware and high-end kitchenware. It provides a delicate appearance and superior durability.'
        },
        {
            id: 3,
            category: 'Bathroom',
            categoryId: 1,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/5c71d4c4298efd51af7485f76c07b166e3959178-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/591d56edbbbad0657c253620cc1a5f7e875b47e8-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a120ea718949278036675b878ebf1a8c1e5ed589-1640x1620.jpg?w=1440&h=1422&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9262c6fb59f0c04e7f348b799e4e090fb96a4498-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Tile Sets',
            brand: 'LetterFolk',
            brandId: 3,
            price: 12,
            sale: 0,
            raiting: 5,
            stock: 23,
            description: 'Each set includes 75 silicone hexagon tiles that are interchangeable with any Letterfolk Tile Mat and stored in a dishwasher-safe mesh cotton drawstring bag.'
        },
        {
            id: 4,
            category: 'Bathroom',
            categoryId: 1,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/76858bb280dc9a1df9a0efec425b485ea8b01286-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/0a83d793f92558354912d61aac1d6772fa50138e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/8095064749d888d9b5ef8c75a9ba8e29ca17155a-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Toilet Brush',
            brand: 'Zone Denmark',
            brandId: 4,
            price: 90,
            sale: 15,
            raiting: 3.4,
            stock: 12,
            description: 'The UME bathroom series is a soft, gentle and pleasant acquaintance.'
        },
        {
            id: 5,
            category: 'Bedroom',
            categoryId: 2,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/b4d383de743dfc68bd7084996ab19a3449daf772-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/e98181947ef6399b7f06eecf46fcf249ac80a6a2-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/2d014fec514706164f6b81084eca30f0c20c4837-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/3b25b6ace4fd5bc09dbcb774c51b0b46c60ded14-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Medium Storage Bins',
            brand: 'Open Spaces',
            brandId: 5,
            price: 62,
            sale: 0,
            raiting: 4.6,
            stock: 42,
            description: 'Tidy up any room with multi-purpose storage for the shelf, the pantry, and more'
        },
        {
            id: 6,
            category: 'Bedroom',
            categoryId: 2,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/97af7c1f1e13cb43ce5b5ea4ce0182c34d76e535-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/97af7c1f1e13cb43ce5b5ea4ce0182c34d76e535-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f10d5b21fa646fe4fcc5c020a8746dc8c1727332-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Capsule Placemat',
            brand: 'Slash Objects',
            brandId: 6,
            price: 35,
            sale: 0,
            raiting: 5,
            stock: 4,
            description: 'Fun shaped, heat resistant recycled rubber placemat protects tabletops from hot pans and pots.'
        },
        {
            id: 7,
            category: 'Entryway',
            categoryId: 3,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/6450ad87e414c4cf6b838f8840cb696cf0230f35-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/6450ad87e414c4cf6b838f8840cb696cf0230f35-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',],
            title: 'Tradescantia nanouk',
            brand: 'Rooted',
            brandId: 7,
            price: 19,
            sale: 10,
            raiting: 4.9,
            stock: 1,
            description: `This plant has colorful leaves that are delicately striped with pink variegation. The foliage cascades, so it prefers to be the highest in the room. With the right conditions, the Tradescantia Nanouk grows star-shaped flowers that bloom spring through fall.`,
        },
        {
            id: 8,
            category: 'Entryway',
            categoryId: 3,
            image:'https://cdn.sanity.io/images/nmk5oubi/production/d8c302dd0f24dcd622f6fd0055ff405f3d681ed3-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/d8c302dd0f24dcd622f6fd0055ff405f3d681ed3-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f6eeb50f963590c80948afb7e20de6d556759a9c-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/51cb172f17b88310fe0f2fce9c1c055ad9642e53-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Vase',
            brand: 'Paul Arhold Glass',
            brandId: 8,
            price: 295,
            sale: 0,
            raiting: 5,
            stock: 12,
            description: `Each Paul Arnhold vase is carefully hand blown and shaped, and can stand artfully on its own or dressed with flowers.`,
        },
        {
            id: 9,
            category: 'Home Office',
            categoryId: 4,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/a693f00f6f3d02d9ae5b6bfb2067a5cb6f831464-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/a693f00f6f3d02d9ae5b6bfb2067a5cb6f831464-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/5c1ad1883cebddd88dacf36d4224461c8ac5e319-1920x1620.jpg?w=1440&h=1215&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/7c071eb458c7b494824ce9e3cafcf66867241c0e-1920x1620.jpg?w=1440&h=1215&auto=format&q=85'],
            title: 'Shelf Risers',
            brand: 'Open Spaces',
            brandId: 5,
            price: 72,
            sale: 0,
            raiting: 4.9,
            stock: 152,
            description: `Easily double the surface area on counters, in cabinets, or any open shelving area`,
        },
        {
            id: 10,
            category: 'Kids Room',
            categoryId: 5,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/9925243c727037bd2718e6b480b9e62b38cb32c1-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/9925243c727037bd2718e6b480b9e62b38cb32c1-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9d6ed124a43fa2280fb8f15e52deccb5a1d51689-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a91bc041eeef1e19dd2de6f6c143252d221ed69d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Hug Me Pillow',
            brand: 'LetterFolk',
            brandId: 3,
            price: 56,
            sale: 0,
            raiting: 5,
            stock: 120,
            description: `Handmade with 100% organic alpaca wool in Peru, these Hug Me Pillows are beautifully designed and handcrafted in three different color options.`,
        },
        {
            id: 11,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/5580d4dbbd7e54c7f29d97b5f58d41ae60a68e0d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/5580d4dbbd7e54c7f29d97b5f58d41ae60a68e0d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/457c868221ac38e3e2f5578767d87d668bc2b234-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/44125e93eb15a47bf4d34c2ba0c2cafe7d1dc230-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/e7a841bc7bfeccc0e1163bf169f6afe664f11560-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Spoonula',
            brand: 'GIR',
            brandId: 1,
            price: 13,
            sale: 0,
            raiting: 4.9,
            stock: 208,
            description: `Part spoon, part spatula—this multi-purpose kitchen utensil does it all. It scrapes, scoops, and serves up whatever dish your heart desires. Moves effortlessly between cooking and baking or sweet and savory.`,
        },
        {
            id: 12,
            category: 'Living Room',
            categoryId: 7,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/7f7deec869611c9151917cf170494120e88c1066-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/7f7deec869611c9151917cf170494120e88c1066-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/5a2c06ce74cb05d010629b1a0ba35d9c3a45bcb4-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/c2518ab1c4dc4fd51f9fcb678da90889ac995592-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Paradise Found Puzzle',
            brand: 'PieceWork Puzzles',
            brandId: 9,
            price: 38,
            sale: 0,
            raiting: 4.1,
            stock: 6,
            description: `This candlelit, baroque still life goes all-in on drama, rich colors, and indulgence.`,
        },
        {
            id: 13,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/e9a96c25ae22b6532e1177820f6c8ec0cdd451d0-1620x1562.jpg?w=1440&h=1388&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/e9a96c25ae22b6532e1177820f6c8ec0cdd451d0-1620x1562.jpg?w=1440&h=1388&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/adff54bd07d5aaabb22f93a9be83320210b784fe-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/b9bef47c4e9684562e7f1b7a14d64bd748654156-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'The Mini Tool Set',
            brand: 'GIR',
            brandId: 1,
            price: 40,
            sale: 0,
            raiting: 4.9,
            stock: 60,
            description: 'Combining the best of GIR\'s award-winning kitchen tools, the GIR Mini Tool Set is made for little hands and big ideas.'
        },
        {
            id: 14,
            category: 'Home Office',
            categoryId: 4,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/6592d829cda33ba995c9136165b214c4ec684560-1440x1072.jpg?w=700&h=521&auto=format',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/87fa57ad61425c59305b31c2e48aeb296eb74261-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f59996f2998f171593316e3e721205d037275530-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/9a1f799ea7417165c781a68beac68bf3d8b13001-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Entryway Rack',
            brand: 'Open Spaces',
            brandId: 5,
            price: 184,
            sale: 0,
            raiting: 4.5,
            stock: 92,
            description: `Turn organization into decor with a multi-use, three-tier rack that’s beautiful in any room`,
        },
        {
            id: 15,
            category: 'Living Room',
            categoryId: 7,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/bfa90df6a4df52b872f3fe99c776d7c2fe44052e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/bfa90df6a4df52b872f3fe99c776d7c2fe44052e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/67d01d48174ce7f4e101b50e4b7cfbbdb4a9b2c6-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/ab9272051d01674c4928620ea8c0a153228ef078-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Modern Cuckoo Clock',
            brand: 'PieceWork Puzzles',
            brandId: 9,
            price: 139.9,
            sale: 0,
            raiting: 4,
            stock: 157,
            description: `Bring the timelessness of traditional cuckoo clocks with a sleek, contemporary reinterpretation for the modern home.`,
        },
        {
            id: 16,
            category: 'Living Room',
            categoryId: 7,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/d91c2ffb030d691fb1b49e871c5b8cba47716e77-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/d91c2ffb030d691fb1b49e871c5b8cba47716e77-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/f0273ae78392edf37847e0700ed89581974da38e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Castillo Candle',
            brand: 'Yield Design',
            brandId: 2,
            price: 28,
            sale: 0,
            raiting: 5.0,
            stock: 23,
            description: 'Inspired by the natural setting of Saint Augustine’s Castillo de San Marcos fortress, built in 1672.'
        },
        {
            id: 17,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/3dd6aab6c119398d246ba409e570894b9cd50405-1680x1621.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/3dd6aab6c119398d246ba409e570894b9cd50405-1680x1621.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/ee69180124df14ec3e56268be7a74b6e5543c34e-1680x1621.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/982c3112ec479cf63a5cdeec304596bcc0a74845-1680x1621.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Cupcake Liners',
            brand: 'GIR',
            brandId: 1,
            price: 16,
            sale: 0,
            raiting: 5,
            stock: 2,
            description: 'Designed in collaboration with a professional pastry chef, our reusable silicone liners have so much more to offer than their single-use counterparts.'
        },
        {
            id: 18,
            category: 'Bathroom',
            categoryId: 1,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/b2880d48b9b5d39f9910bc35fcd3316fba47bf87-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/b2880d48b9b5d39f9910bc35fcd3316fba47bf87-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/59a1e75df122ebbe3854ea154465cc5362dc5fa2-1920x1620.jpg?w=1440&h=1215&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/a0428bbd064312b4ae0cfaab0efdef1796faf451-1920x1620.jpg?w=1440&h=1215&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/99c72a3213f6da38fe8a9382ba0c199193a2faa5-1920x1620.jpg?w=1440&h=1215&auto=format&q=85'],
            title: 'Small Storage Bins - Set of 2',
            brand: 'Open Spaces',
            brandId: 5,
            price: 52,
            sale: 0,
            raiting: 5,
            stock: 12,
            description: 'A fitting home for all the little items that tend to spread out and get lost'
        },
        {
            id: 19,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/846f7fa45b9ad9c87f78f90495c25f5e13dcef6e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/846f7fa45b9ad9c87f78f90495c25f5e13dcef6e-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/21251a27d594ef38cbf0db2837a93234e500b346-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Large Wire Baskets - Set of 2',
            brand: 'Open Spaces',
            brandId: 5,
            price: 100,
            sale: 0,
            raiting: 4.6,
            stock: 10,
            description: 'Refresh every room with easy-access storage for items like blankets, books, or laundry'
        },
        {
            id: 20,
            category: 'Kitchen & Dining',
            categoryId: 6,
            image: 'https://cdn.sanity.io/images/nmk5oubi/production/741373b954e3b379365e37f4c9b187c24e64054d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85',
            gallery: ['https://cdn.sanity.io/images/nmk5oubi/production/741373b954e3b379365e37f4c9b187c24e64054d-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/7da41daa61a64fcc88be5e0ca42903825f13d333-1680x1620.jpg?w=1440&h=1389&auto=format&q=85', 'https://cdn.sanity.io/images/nmk5oubi/production/06f4ba4d1331a993b3ba453ea3116d088c5be926-1680x1620.jpg?w=1440&h=1389&auto=format&q=85'],
            title: 'Tongs',
            brand: 'GIR',
            brandId: 1,
            price: 16.95,
            sale: 0,
            raiting: 4.3,
            stock: 100,
            description: `GIR Tongs feature heat-resistant, nylon blades that can be used safely on high-quality nonstick and ceramic cooking surfaces without risking unsightly scratches or damage.`,
        },
        
    ],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
})

export const getAllProducts = ((state: RootState) => state.products.products);
export const getAllPrices = ((state: RootState) => Array.from(new Set(state.products.products.map((product) => product.price).sort((a, b) => a - b))));
export const getAllStocks = ((state: RootState) => Array.from(new Set(state.products.products.map((product) => product.stock).sort((a, b) => a - b))));
export default productSlice.reducer;