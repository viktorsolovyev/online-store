import '../styles/components/cartPage.css';
import '../styles/components/cartItem.css';
import { getTotalCart } from '../app/feautures/cartSlice';
import { useSelector } from 'react-redux';
import CartPageItem from '../components/CartPageItem';
import { useMemo, useState } from 'react';

const CartPage = () => {

  const totalCart = useSelector(getTotalCart);

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
        <div></div>
      </div>
    </div>
  )
}

export default CartPage