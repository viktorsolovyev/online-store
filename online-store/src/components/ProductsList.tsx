import { FC } from "react"
import { IProduct } from "../types/types"
import ProductCart from "./ProductCard"

interface ProductsListProps {
  totalProducts: IProduct[],
  isRow: boolean,
}

const ProductsList:FC<ProductsListProps> = ({totalProducts, isRow}) => {
  return (
    <ul className={isRow ? 'products__list' : 'products__list products__list-column'}>
    {totalProducts.map(product => 
      <ProductCart isRow={isRow} key={product.id} product={product}/>
    )}
  </ul>
  )
}

export default ProductsList