import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from "../app/feautures/productsSlice";
import ProductsSettings from "../components/ProductsSettings";
import ProductsList from "../components/ProductsList";
import '../styles/pages/storePage.css';
import { IProduct } from "../types/types";

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
    
    const [sortParam, sortType] = sortBy.split('-');

    const key: keyof IProduct = sortParam as keyof IProduct;
    copy.sort((a,b) => {
      if (sortType === 'ASC') {
        return +a[key] - +b[key];
      } 
      return +b[key] - +a[key];
    });
    
    return copy;
  },[totalProducts, sortBy]);

  return (
    <div className="container store__container">
        <aside className="filters"></aside>
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