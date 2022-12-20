import { FC } from "react"
import { ICart } from "../types/types"
import { getPriceSale } from '../helpers/getSalePrice';

interface CartPageItemProps {
  product: ICart,
}

const CartPageItem:FC<CartPageItemProps> = ({product}) => {
  return (
    <li className='cart__item'>
      <div className='cart__item-content'>
        <img alt={product.title} src={product.image} className='cart__item-image'/>
        <div>
          <h3 className='cart__item-heading'>{product.title}</h3>
          <p className='cart__item-description'>{product.description.slice(0,30)}...</p>
          <div className='cart__item-amount'>
            <button>-</button>
            <span>{product.amount}</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className='cart__item-price'>
        <div className="card__price">
          {product.sale !== 0
            ? <div className="card__price-sale">
                <div className="card__price-main">{(product) ? getPriceSale(product.price, product.sale) : ''}$</div>
                <div className="card__price-prev">{product.price}$</div>
              </div>
            : <div className="card__price-main">{product.price}$</div>
          }
        </div>
        <button className='cart__item-remove'>remove</button>
      </div>
    </li>
  )
}

export default CartPageItem