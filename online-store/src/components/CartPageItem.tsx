import { FC } from "react"
import { ICart } from "../types/types"
import { getPriceSale } from '../helpers/getSalePrice';
import { useDispatch } from "react-redux";
import { removeFromCart, addAmount, removeAmount } from "../app/feautures/cartSlice";

interface CartPageItemProps {
  product: ICart,
}

const CartPageItem:FC<CartPageItemProps> = ({product}) => {

  const dispatch = useDispatch();

  function removeProduct() {
    dispatch(removeFromCart(product.id))
  }

  function incrementAmount() {
    dispatch(addAmount(product.id))
  }

  function decrementAmount() {
    if (product.amount === 1) {
      removeProduct();
      return;
    }
    dispatch(removeAmount(product.id));
  }

  return (
    <li className='cart__item'>
      <div className='cart__item-content'>
        <img alt={product.title} src={product.image} className='cart__item-image'/>
        <div>
          <h3 className='cart__item-heading'>{product.title}</h3>
          <div className="card__info cart__item-info">
            <div className="card__rating">
              <span className="card__raiting-icon"></span>
              <div className="card__rating-number">{product.raiting}</div>
            </div>
            <div className="card__stock">/</div>
            <div className="card__stock">{product.stock} in stock</div>
          </div>
          <p className='cart__item-description'>{product.description.slice(0,30)}...</p>
          <div className='cart__item-amount'>
            <button onClick={decrementAmount}>-</button>
            <span>{product.amount}</span>
            <button onClick={incrementAmount}>+</button>
          </div>
        </div>
      </div>
      <div className='cart__item-price'>
        <div className="card__price">
          {product.sale !== 0
            ? <div className="card__price-sale">
                <div className="card__price-main">{(product) ? getPriceSale(product.price * product.amount, product.sale) : ''}$</div>
                <div className="card__price-prev">{product.price * product.amount}$</div>
              </div>
            : <div className="card__price-main">{product.price * product.amount}$</div>
          }
        </div>
        <button onClick={removeProduct} className='cart__item-remove'>remove</button>
      </div>
    </li>
  )
}

export default CartPageItem