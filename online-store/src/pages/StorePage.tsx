import { useSelector } from "react-redux";
import { getAllProducts } from "../app/feautures/productsSlice";
import ProductCart from "../components/ProductCart";
import '../styles/components/storePage.css';

const StorePage = () => {
  const totalProducts = useSelector(getAllProducts);
  
  return (
    <div className="container store__container">
        <aside>Filters</aside>
        <div className="products__container">
          <ul className="products__list">
            {totalProducts.map(product => 
              <ProductCart key={product.id} product={product}/>
            )}
          </ul>
        </div>
    </div>
  )
}

export default StorePage