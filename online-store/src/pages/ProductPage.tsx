import '../styles/pages/productPage.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../app/feautures/productsSlice";
import { getAllCategories } from '../app/feautures/categories';
import { getTotalCart } from '../app/feautures/cartSlice';
import { useEffect, useState } from "react";
import { IProduct, ICategories } from "../types/types";
import { getPriceSale } from '../helpers/getSalePrice';
import { addToCart, removeFromCart } from '../app/feautures/cartSlice';
import { toggleModal } from '../app/feautures/modalSlice';

const ItemPage = () => {

  const { productId } = useParams();
  const disptach = useDispatch();

  const totalCart = useSelector(getTotalCart);
  const totalProducts = useSelector(getAllProducts);
  const totalCategories = useSelector(getAllCategories);

  const [currentImage, setCurrentImage] = useState<string>();
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [currentCategory, setCurrentCategory] = useState<ICategories>();

  useEffect(() => {
    if (productId) {
      const findedProduct = totalProducts.find(product => product.id === +productId);
      if (findedProduct) {
        const findedCategory = totalCategories.find(category => category.id === findedProduct.categoryId);
        setCurrentProduct(findedProduct);
        setCurrentCategory(findedCategory);
        setCurrentImage(findedProduct.image);
      }
    }
  }, []);

  let findItem;

  if (productId) {
    findItem = totalCart.find(item => item.id === +productId);
  }

  function addProduct() {
    if (currentProduct) disptach(addToCart(currentProduct));
  }

  function removeProduct() {
    if (currentProduct) disptach(removeFromCart(currentProduct.id));
  }

  function buyProduct() {
    if (currentProduct) {
      disptach(addToCart(currentProduct));
      disptach(toggleModal(true));
    };
  }

  return (
    <div className="container product__container">
      {currentProduct
      ?
      <div>
        <ul className="product__pagi">
          <Link to="/" className="product__pagi-item">Store</Link>
          <li className="product__pagi-item">{currentCategory?.name}</li>
          <li className="product__pagi-item">{currentProduct?.brand}</li>
        </ul>
        <div className="product__content">
          <div className='product__content-main'>
            <img alt={currentProduct?.title} src={currentImage} className="product__content-image"/>
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
                {
                  findItem 
                  ? <button onClick={removeProduct} className='btn'>Remove from cart</button>
                  : <button onClick={addProduct} className='btn'>Add to cart</button>
                }
                <Link onClick={buyProduct} to="/cart" className='btn'>Shop now</Link>
              </div>
            </div>
          </div>
          <ul className='product__gallery'>
            {currentProduct?.gallery.map(image => 
              <button key={image} onClick={() => setCurrentImage(image)}><img className='product__gallery-item' alt={currentProduct.title} src={image}/></button>
            )}
          </ul>
        </div>
      </div>
      :
      <div className='error-message'>Can't find product {productId}</div>
      }
    </div>
  )
}

export default ItemPage