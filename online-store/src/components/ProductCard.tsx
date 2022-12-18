import { FC } from "react"
import { Link } from "react-router-dom";
import { IProduct } from "../types/types";
import { getPriceSale } from "../helpers/getSalePrice";
import '../styles/components/productItem.css';

interface ProductCartProps {
  product: IProduct;
  isRow: Boolean,
}

const ProductCart:FC<ProductCartProps> = ({product, isRow}) => {
  return (
    <Link to={`product/${product.id}`} key={product.id} className={!isRow ? 'product__item product__item-column' : 'product__item'}>
      <div className="card__header">
        <img className="card__image" alt={product.brand} src={product.image}/>
        {(product.sale > 0 )
        ? <div className="card__sale">-{product.sale}%</div>
        : ''
        }
      </div>
      <div className="card__content">
        <h3 className="card__brand">{product.brand}</h3>
        <h2 className="card__title">{product.title}</h2>
        <div className="card__info">
          <div className="card__rating">
            <span className="card__raiting-icon"></span>
            <div className="card__rating-number">{product.raiting}</div>
          </div>
          <div className="card__stock">/</div>
          <div className="card__stock">{product.stock} in stock</div>
        </div>
        <p className="card__description">
          {product.description.slice(0,123).trim()}...
        </p>
        <div className="card__footer">
          <div className="card__price">
            {product.sale > 0 
            ? <div className="card__price-sale"><div className="card__price-main">{getPriceSale(product.price, product.sale)}$</div><div className="card__price-prev">{product.price}$</div></div>
            : <div className="card__price-main">{product.price}$</div>
            }
          </div>
          <button className="card__btn"><span className="card__btn-icon"></span></button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCart;