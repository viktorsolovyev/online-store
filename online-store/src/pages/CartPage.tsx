import '../styles/pages/cartPage.css';
import '../styles/components/cartItem.css';
import { getTotalCart } from '../app/feautures/cartSlice';
import { useSelector } from 'react-redux';
import CartPageItem from '../components/CartPageItem';
import { ChangeEvent, useMemo, useState } from 'react';
import { getPriceSale } from '../helpers/getSalePrice';
import CartTotalPrice from '../components/CartTotalPrice';
import CartPagination from '../components/CartPagination';
import CartHeaderInfo from '../components/CartHeaderInfo';

const CartPage = () => {

  const totalCart = useSelector(getTotalCart);

  const [perPage, setPerPage] = useState(2);
  const [configPromo, setConfigPromo] = useState({shiping: 8, sale: 10})
  const [currentPage, setCurrentPage] = useState(1);
  const [isPromo, setIsPromo] = useState({sale: false, shiping: false});

  const perPageCart = useMemo(() => {
    const pages = Math.ceil(totalCart.length / perPage);
    if (currentPage > pages) setCurrentPage(currentPage - 1);
    return totalCart.slice((currentPage - 1) * perPage, currentPage * perPage);
  }, [perPage, currentPage, totalCart])

  function getTotalPrice() {
    let counter = 0;
    totalCart.map((item) => counter += item.price * item.amount);
    if (isPromo.sale) counter = getPriceSale(counter, configPromo.sale);
    return counter;
  }

  function addPromo(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "RS") setIsPromo({...isPromo, sale: true});
    if (e.target.value === "EPM") {
      setConfigPromo({...configPromo, shiping: 0})
      setIsPromo({...isPromo, shiping: true});
    }
  }

  return (
    <div className="container">
      {
        totalCart.length === 0 
        ?
        <div className="cart__content">
          <h2 className='error-message'>Your cart is empty</h2>
        </div>
        :
        <div className="cart__content">
          <div className='cart__content-cart'>
            <div className='cart__content-header'>
              <h2 className='cart__content-heading'>Your order</h2>
              <CartHeaderInfo
                perPage={perPage}
                setPerPage={setPerPage} 
                currentPage={currentPage}
              />
            </div>
            <ul>
              {perPageCart.map(item => 
                <CartPageItem key={item.id} product={item}/>
              )}
            </ul>
            <CartPagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <CartTotalPrice
            shipingPrice={configPromo.shiping}
            getTotalPrice={getTotalPrice}
            addPromo={addPromo}
            isPromo={isPromo}
          />
        </div>
      }
    </div>
  )
}

export default CartPage