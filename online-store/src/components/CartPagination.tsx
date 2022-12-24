import '../styles/components/cartPagination.css';
import { FC } from "react";
import { useSearchParams } from 'react-router-dom';

interface CartPaginationProps {
  setCurrentPage: Function,
  currentPage: number,
}

const CartPagination: FC<CartPaginationProps> = ({setCurrentPage, currentPage}) => {

  const [searchQuery, setSearchQuery] = useSearchParams();

  function nextPage() {
    searchQuery.set('page',`${currentPage + 1}`);
    setSearchQuery(searchQuery);
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    if (currentPage === 1) return;
    searchQuery.set('page',`${currentPage - 1}`);
    setSearchQuery(searchQuery);
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className='cart__pagination'>
      <button className='cart__pagination-prev' onClick={prevPage}></button>
      <button className='cart__pagination-next' onClick={nextPage}></button>
    </div>
  )
}

export default CartPagination