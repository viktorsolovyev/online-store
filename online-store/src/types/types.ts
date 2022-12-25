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

export type ICart = {
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
    amount: number,
}

export type ICategories = {
    id: number,
    categoryName: string,
}

export type IErrors = {
  email: boolean,
  firstname: boolean,
  lastname: boolean,
  address: boolean,
  number: boolean,
  cardNumber: boolean,
  date: boolean,
  CVV: boolean,
}
  
export type IFormData = {
  email: string,
  firstname: string,
  lastname: string,
  address: string,
  number: string,
  cardNumber: string,
  cardNumberValid: string,
  date: string,
  CVV: string,
}


export type IPromo = {
  name: string,
  body: string,
  sale: number,
}
