import { FC } from 'react';
import '../styles/components/productsSettings.css';
import DropdownModal from './DropdownModal';
import { useSearchParams } from 'react-router-dom';

interface ProductSettingsProps {
  amount: number,
  isRow: Boolean,
  modalOpen: boolean,
  setIsRow: Function,
  setModalIsOpen: Function,
}

const ProductsSettings:FC <ProductSettingsProps> = ({amount, setIsRow, isRow, modalOpen, setModalIsOpen}) => {

  const [, setSwitcherParams] = useSearchParams();

  function changeRow() {
    setIsRow(!isRow);
    setSwitcherParams({isRow: `${isRow}`}); 
  }

  return (
    <div className="products__settings">
        <h3 className="products__found">Found: {amount}</h3>
        <div className="product__sort-items">
        <button onClick={() => setModalIsOpen(!modalOpen)} className="products__settings-sort">
          Select sort
          <span className="products__settings-sort_icon"></span>
          <DropdownModal modalOpen={modalOpen}/>
        </button>
        <button onClick={changeRow} className="products__settings-switcher">
          <div className={!isRow ? "products__settings-switcher-btn products__settings-switcher-btn_active" : "products__settings-switcher-btn"}>
            <span className="products__settings-switcher-icon products__settings-switcher-icon_column"></span>
          </div>
          <div className={isRow ? "products__settings-switcher-btn products__settings-switcher-btn_active" : "products__settings-switcher-btn"}>
            <span className="products__settings-switcher-icon products__settings-switcher-icon_row"></span>
          </div>
        </button>
        </div>
    </div>
  )
}

export default ProductsSettings