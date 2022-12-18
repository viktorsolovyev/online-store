import '../styles/components/productPage.css';
import '../styles/components/productItem.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getAllProducts } from "../app/feautures/productsSlice";
import { useEffect, useState } from "react";
import { IProduct } from "../types/types";
import { getPriceSale } from '../helpers/getSalePrice';

const ItemPage = () => {

  const { productId } = useParams();
  const totalProducts = useSelector(getAllProducts);
  const [currentProduct, setCurrentProduct] = useState<IProduct>();

  useEffect(() => {
    if (productId) {
      const finded = totalProducts.find(product => product.id === +productId);
      setCurrentProduct(finded);
    }
  }, [])

  return (
    <div className="container product__container">
      <ul className="product__pagi">
        <Link to="/" className="product__pagi-item">Store</Link>
        <li className="product__pagi-item">Home</li>
        <li className="product__pagi-item">{currentProduct?.brand}</li>
      </ul>
      <div className="product__content">
        <img alt={currentProduct?.title} src={currentProduct?.image} className="product__content-image"/>
        <div className="product__content-description">
          <h3 className="card__brand product__content-brand">{currentProduct?.brand}</h3>
          <h2 className="card__title product__content-title">{currentProduct?.title}</h2>
          <div className="card__info">
            <div className="card__rating">
              <span className="card__raiting-icon"></span>
              <div className="card__rating-number">{currentProduct?.raiting}</div>
            </div>
              <div className="card__stock">/</div>
              <div className="card__stock">{currentProduct?.stock} in stock in stock</div>
          </div>
          <p className="card__description product__page-description">
            {currentProduct?.description}
          </p>
          <div className="card__price product__page-price">
            {currentProduct?.sale !== 0
            ? <div className="card__price-sale">
                <div className="card__price-main">{(currentProduct) ? getPriceSale(currentProduct.price, currentProduct.sale) : ''}$</div>
                <div className="card__price-prev">{currentProduct?.price}$</div>
              </div>
            : <div className="card__price-main">{currentProduct?.price}$</div>
            }
          </div>
          <div className='product__price-btns'>
            <button className='btn'>Add to cart</button>
            <button className='btn'>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPage