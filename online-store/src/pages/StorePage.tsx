import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from "../app/feautures/productsSlice";
import ProductsSettings from "../components/ProductsSettings";
import ProductsList from "../components/ProductsList";
import '../styles/components/storePage.css';

const StorePage = () => {
  const totalProducts = useSelector(getAllProducts);
  const [sortBy, setSortBy] = useState('');
  const [isRow, setIsRow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery] = useSearchParams();

  useEffect(() => {
    if (searchQuery.get('isRow')) {
      const listType = searchQuery.get('isRow') === 'true' ? true : false;
      setIsRow(listType);
    }
    if (searchQuery.get('filter')) {
      const filterType = searchQuery.get('filter');
      if (filterType) {
        setSortBy(filterType);
      };
    }
  }, [])

  const sortedProducts = useMemo(() => {
    const copy = [...totalProducts];
    if (sortBy.length <= 0) return copy;
    if (sortBy === 'asc') {
      copy.sort((a,b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      copy.sort((a,b) => b.price - a.price);
    } else if (sortBy === 'raitAsc') {
      copy.sort((a,b) => a.raiting - b.raiting);
    } else if (sortBy === 'raitDesc') {
      copy.sort((a,b) => b.raiting - a.raiting);
    } else if (sortBy === 'discAsc') {
      copy.sort((a,b) => a.sale - b.sale);
    } else if (sortBy === 'discDesc') {
      copy.sort((a,b) => b.sale - a.sale);
    }
    return copy;
  },[totalProducts, sortBy]);

  return (
    <div className="container store__container">
        <aside className="filters">Filters</aside>
        <div className="products__container">
          <ProductsSettings 
            modalOpen={modalOpen}
            setModalIsOpen={setModalOpen}
            isRow={isRow}
            setIsRow={setIsRow}
            amount={totalProducts.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ProductsList totalProducts={sortedProducts} isRow={isRow}/>
        </div>
    </div>
  )
}

export default StorePage