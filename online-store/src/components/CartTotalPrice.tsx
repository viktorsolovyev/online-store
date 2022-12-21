import '../styles/components/cartTotalPrice.css';
import { FC } from "react"

interface CartTotalPriceProps {
  shipingPrice: number,
  addPromo: Function,
  isPromo: {sale: boolean, shiping: boolean},
  getTotalPrice: Function,
}

const CartTotalPrice: FC<CartTotalPriceProps> = ({shipingPrice, addPromo, isPromo, getTotalPrice}) => {

  return (
    <div className='cart__total'>
      <div className='cart__total-content'>
        <h2 className='cart__total-heading'>Total</h2>
        <div className='cart__total-heading'>${getTotalPrice() + shipingPrice}</div>
      </div>
      <ul className='cart__total-list'>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Subtotal</div>
          <div className='cart__total-price'>${getTotalPrice()}</div>
        </li>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Shipping</div>
          <div className='cart__total-price'>${shipingPrice}</div>
        </li>
      </ul>
      <form className='cart__total-promo' action="#">
        <input onChange={(e) => addPromo(e)} placeholder='Enter promo' className='cart__total-promo-input' id='promo' type="text"/>
        <label 
          className='cart__total-label'
          htmlFor="promo">Promo for test: <span className={isPromo.sale ? 'promo_active' : ''}>'RS'</span>, <span className={isPromo.shiping ? 'promo_active' : ''}>'EPM'</span>
        </label>
      </form>
      <button className='cart__total-btn btn'>Continue</button>
    </div>
  )
}

export default CartTotalPrice