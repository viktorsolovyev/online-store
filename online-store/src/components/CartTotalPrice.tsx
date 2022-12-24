import '../styles/components/cartTotalPrice.css';
import { FC } from "react"
import { getPriceSale } from '../helpers/getSalePrice';

interface CartTotalPriceProps {
  totalPrice: number,
  totalSale: number,
  totalShiping: number,
  baseShiping: number,
  addPromo: Function,
  setIsOpen: Function,
}

const CartTotalPrice: FC<CartTotalPriceProps> = ({totalPrice, totalSale, totalShiping, baseShiping, addPromo, setIsOpen}) => {

  function totalPriceWithSale() {
    return getPriceSale(totalPrice, totalSale);
  }

  const isSale = totalSale > 0;
  const isShiping = totalShiping === 0;

  return (
    <div className='cart__total'>
      <div className='cart__total-content'>
        <h2 className='cart__total-heading'>Total</h2>
        <div className='cart__total-heading'>${totalPrice > 0 ? totalPriceWithSale() + totalShiping : totalPrice}</div>
      </div>
      <ul className='cart__total-list'>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Subtotal</div>
          {isSale
          ?
            <div className="card__price-sale">
              <div className="card__price-main">{totalPriceWithSale()}$</div>
              <div className="card__price-prev">{totalPrice}$</div>
            </div>
          : <div className='cart__total-price'>${totalPrice}</div>
          }
        </li>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Shipping</div>
          {isShiping
          ?
            <div className="card__price-sale">
              <div className="card__price-main">{0}$</div>
              <div className="card__price-prev">{baseShiping}$</div>
            </div>
          : <div className='cart__total-price'>${baseShiping}</div>
          }
        </li>
      </ul>
      <form className='cart__total-promo' action="#">
        <input onChange={(e) => addPromo(e)} placeholder='Enter promo' className='cart__total-promo-input' id='promo' type="text"/>
        <label 
          className='cart__total-label'
          htmlFor="promo">Promo for test: 
          <span className={isSale ? 'promo_active' : ''}> 'RS'</span>, <span className={isShiping ? 'promo_active' : ''}>'EPM'</span>
        </label>
      </form>
      <button onClick={() => setIsOpen(true)} className='cart__total-btn btn'>Continue</button>
    </div>
  )
}

export default CartTotalPrice