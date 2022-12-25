import '../styles/components/cartPromo.css';
import { FC, FormEvent, useState, useMemo } from 'react'
import { IPromo } from '../types/types';
import { promocodes } from '../data/promocodes';

interface CartPromoProps {
  totalSale: number,
  activePromos: IPromo[],
  setActivePromos: Function,
  setTotalSale: Function,
}

const CartPromo:FC<CartPromoProps> = ({totalSale, activePromos, setActivePromos, setTotalSale}) => {

  const [inputPromo, setInputPromo] = useState('');

  const findPromo = useMemo(() => {
    const isPromo = findPromocode(false, inputPromo)
    return (isPromo) ? isPromo : false;
  }, [inputPromo]);

  function findPromocode(active: boolean, promo: string) {
    return (active) ? activePromos.find(item => item.name === promo) : promocodes.find(item => item.name === promo);
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
  )
}

export default CartPromo