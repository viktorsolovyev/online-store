import '../styles/components/cartTotalPrice.css';
import { FC, FormEvent, useMemo, useState } from "react"
import { getPriceSale } from '../helpers/getSalePrice';
import { IPromo } from '../types/types';
import { promocodes } from '../data/promocodes';

interface CartTotalPriceProps {
  totalPrice: number,
  totalSale: number,
  baseShiping: number,
  setIsOpen: Function,
  setTotalSale: Function,
}

const CartTotalPrice: FC<CartTotalPriceProps> = ({setTotalSale, totalPrice, totalSale, baseShiping, setIsOpen}) => {

  const [activePromos, setActivePromos] = useState<IPromo[]>([]);
  const [inputPromo, setInputPromo] = useState('');

  const isSale = totalSale > 0;

  const findPromo = useMemo(() => {
    const isPromo = findPromocode(false, inputPromo)
    return (isPromo) ? isPromo : false;
  }, [inputPromo]);

  function findPromocode(active: boolean, promo: string) {
    return (active) ? activePromos.find(item => item.name === promo) : promocodes.find(item => item.name === promo);
  }

  function totalPriceWithSale() {
    return getPriceSale(totalPrice, totalSale);
  }

  function addPromo(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const isPromo = findPromocode(true, inputPromo);
    if (!isPromo) {
      const addPromo = findPromocode(false, inputPromo)
      if (addPromo) {
        setActivePromos([...activePromos, addPromo]);
        setTotalSale(totalSale + addPromo.sale);
      }
    }
  }

  function removePromo(item: IPromo) {
    setActivePromos(activePromos.filter(promo => promo.name !== item.name));
    setTotalSale(totalSale - item.sale);
  }

  function isAdded(current: string) {
    const isPromo = findPromocode(true, current);
    return (isPromo) ? true : false;
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
          <div className='cart__total-info'>Shipping</div>
          <div className='cart__total-price'>${baseShiping}</div>
        </li>
      </ul>
      <form className='cart__total-promo' action="#">
        {activePromos.length > 0
        ? 
          <ul className='cart__total-promo-active'>
              {activePromos.map((item) =>
                <li key={item.name} className='cart__total-promo-active-item'>
                  <h3 className='cart__total-info cart__total-promo-active-title'>{item.body} - {item.sale}%</h3>
                  <button onClick={(e) => removePromo(item)} className='cart__total-promo-active-btn'></button>
                </li>
              )}
          </ul>
        : ''
        }
        <input onChange={(e) => setInputPromo(e.target.value)} value={inputPromo} placeholder='Enter promo' className='cart__total-promo-input' id='promo' type="text"/>
        {findPromo
        ?
          <div className='cart__total-finded'>
            <h3 className='cart__total-finded-heading'>Promocode: {findPromo.body} - {findPromo.sale}%</h3>
            {!isAdded(findPromo.name)
              ? <button className='cart__total-finded-btn btn' onClick={(e) => addPromo(e)}>Add</button>
              : ''
            }
          </div>
        : ''
        }
        <div className='cart__total-codes'>
          <label 
            className='cart__total-label'
            htmlFor="promo">Promo for test: 
          </label>
          <ul className='cart__total-promos-list'>
            {promocodes.map(promo => 
              <li className='cart__total-label' key={promo.name}>{promo.name}</li>
            )}
          </ul>
        </div>
      </form>
      <button onClick={() => setIsOpen(true)} className='cart__total-btn btn'>Continue</button>
    </div>
  )
}

export default CartTotalPrice