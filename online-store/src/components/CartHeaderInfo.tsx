import '../styles/components/cartHeaderInfo.css';
import { FC } from "react";

interface CartHeaderProps {
  perPage: number,
  setPerPage: Function,
  currentPage: number,
}

const CartHeaderInfo: FC<CartHeaderProps> = ({perPage, setPerPage, currentPage}) => {

  function decrementPerPage() {
    if (perPage === 1) return;
    setPerPage(perPage - 1);
  }

  function incrementPerPage() {
    if (perPage === 10) return;
    setPerPage(perPage + 1);
  }

  return (
    <div className='cart__content-header-info'>
      <div className='cart__content-header-perpage'>Per page: <button onClick={decrementPerPage}>-</button> {perPage} <button onClick={incrementPerPage}>+</button></div>
      <div>Page: {currentPage}</div>
    </div>
  )
}

export default CartHeaderInfo