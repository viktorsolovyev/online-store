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
  sortBy: string,
  setSortBy: Function,
}

const ProductsSettings:FC <ProductSettingsProps> = ({amount, setIsRow, isRow, modalOpen, setModalIsOpen, sortBy, setSortBy}) => {

  const [searchQuery, setSearchQuery] = useSearchParams();

  function changeRow() {
    searchQuery.set('isRow', `${!isRow}`);
    setSearchQuery(searchQuery); 
    setIsRow(!isRow);
  }

  return (
    <div className="products__settings">
        <h3 className="products__found">Found: {amount}</h3>
        <div className="product__sort-items">
        <div className='products__settings-sort-wrapper'>
          <button onClick={() => setModalIsOpen(!modalOpen)} className="products__settings-sort">Select sort</button>
          <DropdownModal setModalIsOpen={setModalIsOpen} sortBy={sortBy} setSortBy={setSortBy} modalOpen={modalOpen}/>
        </div>
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