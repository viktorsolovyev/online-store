import '../styles/components/cartPage.css';
import '../styles/components/cartItem.css';
import { getTotalCart } from '../app/feautures/cartSlice';
import { useSelector } from 'react-redux';
import CartPageItem from '../components/CartPageItem';
import { useMemo, useState } from 'react';

const CartPage = () => {

  const totalCart = useSelector(getTotalCart);

  const shipingPrice = 8;

  const [perPage, setPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const perPageCart = useMemo(() => {
    const pages = Math.ceil(totalCart.length / perPage);
    if (currentPage > pages) setCurrentPage(currentPage - 1);
    return totalCart.slice((currentPage - 1) * perPage, currentPage * perPage);
  }, [perPage, currentPage, totalCart])

  function decrementPerPage() {
    if (perPage === 1) return;
    setPerPage(perPage - 1);
  }

  function incrementPerPage() {
    if (perPage === 10) return;
    setPerPage(perPage + 1);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  }

  function getTotalPrice() {
    let counter = 0;
    totalCart.map((item) => counter += item.price * item.amount);
    return counter;
  }

  return (
    <div className="container">
      <div className="cart__content">
        <div className='cart__content-cart'>
          <div className='cart__content-header'>
            <h2 className='cart__content-heading'>Your order</h2>
            <div className='cart__content-header-info'>
              <div className='cart__content-header-perpage'>Per page: <button onClick={decrementPerPage}>-</button> {perPage} <button onClick={incrementPerPage}>+</button></div>
              <div>Page: {currentPage}</div>
            </div>
          </div>
          <ul>
            {perPageCart.map(item => 
              <CartPageItem key={item.id} product={item}/>
            )}
          </ul>
          <div className='cart__pagination'>
            <button className='cart__pagination-prev' onClick={prevPage}></button>
            <button className='cart__pagination-next' onClick={nextPage}></button>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  )
}

export default CartPage