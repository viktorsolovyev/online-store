import '../styles/components/cartTotalPrice.css';
import { FC, useState } from "react"
import { useSelector } from 'react-redux';
import { IPromo, ICart } from '../types/types';
import CartPromo from './CartPromo';
import { RootState } from "../../src/app/store";

interface CartTotalPriceProps {
  totalPrice: number,
  totalSale: number,
  baseShiping: number,
  setIsOpen: Function,
  setTotalSale: Function,
}

const CartTotalPrice: FC<CartTotalPriceProps> = ({setTotalSale, totalPrice, totalSale, baseShiping, setIsOpen}) => {

  const isSale = totalSale > 0;
  const [activePromos, setActivePromos] = useState<IPromo[]>([]);
  const totalAmount: number = useSelector((state: RootState) => {
    return state.cart.cart.reduce((sum: number, item: ICart) => (sum += item.amount), 0);
  });

  function totalPriceWithSale() {
    return totalPrice - totalSale;
  }

  return (
    <div className='cart__total'>
      <div className='cart__total-content'>
        <h2 className='cart__total-heading'>Total</h2>
        <div className='cart__total-heading'>${totalPrice > 0 ? totalPriceWithSale() + baseShiping : totalPrice}</div>
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
          <div className='cart__total-info'>Amount</div>
          <div className='cart__total-price'>{totalAmount}</div>
        </li>
        <li className='cart__total-item'>
          <div className='cart__total-info'>Shipping</div>
          <div className='cart__total-price'>${baseShiping}</div>
        </li>
      </ul>
      <CartPromo
        totalSale={totalSale}
        activePromos={activePromos}
        setActivePromos={setActivePromos}
        setTotalSale={setTotalSale}
      />
      <button onClick={() => setIsOpen(true)} className='cart__total-btn btn'>Continue</button>
    </div>
  )
}

export default CartTotalPrice