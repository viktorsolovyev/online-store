import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../app/feautures/productsSlice";
import ProductsSettings from "../components/ProductsSettings";
import ProductsList from "../components/ProductsList";
import '../styles/components/storePage.css';

const StorePage = () => {
  const totalProducts = useSelector(getAllProducts);
  const [isRow, setIsRow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container store__container">
        <aside>Filters</aside>
        <div className="products__container">
          <ProductsSettings 
            modalOpen={modalOpen}
            setModalIsOpen={setModalOpen}
            isRow={isRow}
            setIsRow={setIsRow}
            amount={totalProducts.length}
          />
          <ProductsList totalProducts={totalProducts} isRow={isRow}/>
        </div>
    </div>
  )
}

export default StorePage