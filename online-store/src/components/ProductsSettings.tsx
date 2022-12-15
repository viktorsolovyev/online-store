import { FC } from 'react';
import '../styles/components/productsSettings.css';

interface ProductSettingsProps {
    amount: number,
}

const ProductsSettings:FC <ProductSettingsProps> = ({amount}) => {
  return (
    <div className="products__settings">
        <h3 className="products__found">Found: {amount}</h3>
        <div className="product__sort-items">
        <button className="products__settings-sort">Select sort <span className="products__settings-sort_icon"></span></button>
        <button className="products__settings-switcher">
            <div className="products__settings-switcher-btn"><span className="products__settings-switcher-icon products__settings-switcher-icon_column"></span></div>
            <div className="products__settings-switcher-btn products__settings-switcher-btn_active"><span className="products__settings-switcher-icon products__settings-switcher-icon_row"></span></div>
        </button>
        </div>
    </div>
  )
}

export default ProductsSettings