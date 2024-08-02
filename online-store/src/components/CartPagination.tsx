import '../styles/components/cartPagination.css';
import { FC } from "react";
import { useSearchParams } from 'react-router-dom';

interface CartPaginationProps {
  setCurrentPage: Function,
  totalPages: number,
  currentPage: number,
}

const CartPagination: FC<CartPaginationProps> = ({setCurrentPage, currentPage, totalPages}) => {

  const [searchQuery, setSearchQuery] = useSearchParams();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function nextPage() {
    searchQuery.set('page',`${currentPage + 1}`);
    if (currentPage === totalPages) return;
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
      <button 
        onClick={prevPage}
        disabled={isFirstPage}
        className={isFirstPage ? 'cart__pagination-prev cart__pagination_disabled' : 'cart__pagination-prev'}>
      </button>
      <button 
        onClick={nextPage}
        disabled={isLastPage}
        className={isLastPage ? 'cart__pagination-next cart__pagination_disabled' : 'cart__pagination-next'}>
      </button>
    </div>
  )
}

export default CartPagination