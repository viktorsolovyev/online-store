import '../styles/components/cartTotalPrice.css';
import { FC } from "react"
import { getPriceSale } from '../helpers/getSalePrice';

interface CartTotalPriceProps {
  totalPrice: number,
  addPromo: Function,
  setIsOpen: Function,
  isPromo: {sale: boolean, shiping: boolean},
  configPromo: {sale: number, shiping: number},
  oldPrices: {shiping: number, price: number},
}

const CartTotalPrice: FC<CartTotalPriceProps> = ({totalPrice, oldPrices, addPromo, setIsOpen, isPromo, configPromo}) => {

  function totalPriceWithSale() {
    return getPriceSale(totalPrice, configPromo.sale);
  }

  return (
    <div className='cart__total'>
      <div className='cart__total-content'>
        <h2 className='cart__total-heading'>Total</h2>
        <div className='cart__total-heading'>${isPromo.sale ? totalPriceWithSale() + configPromo.shiping : totalPrice}</div>
      </div>
      <ul className='cart__total-list'>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Subtotal</div>
          {isPromo.sale
          ?
            <div className="card__price-sale">
              <div className="card__price-main">{totalPriceWithSale()}$</div>
              <div className="card__price-prev">{oldPrices.price}$</div>
            </div>
          : <div className='cart__total-price'>${oldPrices.price}</div>
          }
        </li>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Shipping</div>
          {isPromo.shiping
          ?
            <div className="card__price-sale">
              <div className="card__price-main">{configPromo.shiping}$</div>
              <div className="card__price-prev">{oldPrices.shiping}$</div>
            </div>
          : <div className='cart__total-price'>${oldPrices.shiping}</div>
          }
        </li>
      </ul>
      <form className='cart__total-promo' action="#">
        <input onChange={(e) => addPromo(e)} placeholder='Enter promo' className='cart__total-promo-input' id='promo' type="text"/>
        <label 
          className='cart__total-label'
          htmlFor="promo">Promo for test: 
          <span className={isPromo.sale ? 'promo_active' : ''}> 'RS'</span>, <span className={isPromo.shiping ? 'promo_active' : ''}>'EPM'</span>
        </label>
      </form>
      <button onClick={() => setIsOpen(true)} className='cart__total-btn btn'>Continue</button>
    </div>
  )
}

export default CartTotalPrice