import '../styles/components/cartHeaderInfo.css';
import { FC } from "react";
import { useSearchParams } from 'react-router-dom';

interface CartHeaderProps {
  perPage: number,
  setPerPage: Function,
  currentPage: number,
}

const CartHeaderInfo: FC<CartHeaderProps> = ({perPage, setPerPage, currentPage}) => {

  const [searchQuery, setSearchQuery] = useSearchParams();

  function decrementPerPage() {
    if (perPage === 1) return;
    searchQuery.set('limit', `${perPage - 1}`);
    setSearchQuery(searchQuery);
    setPerPage(perPage - 1);
  }

  function incrementPerPage() {
    if (perPage === 10) return;
    searchQuery.set('limit', `${perPage + 1}`);
    setSearchQuery(searchQuery);
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