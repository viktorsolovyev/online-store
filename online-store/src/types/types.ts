export type IProduct = {
    id: number,
    categoryId: number,
    image: string,
    gallery: string[],
    title: string,
    brand: string,
    price: number,
    sale: number,
    raiting: number,
    stock: number,
    description: string,
}

export type ICategories = {
    id: number,
    categoryName: string,
}