import '../styles/pages/cartPage.css';
import '../styles/components/cartItem.css';
import { ChangeEvent, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getTotalCart } from '../app/feautures/cartSlice';
import CartPageItem from '../components/CartPageItem';
import CartTotalPrice from '../components/CartTotalPrice';
import CartPagination from '../components/CartPagination';
import CartHeaderInfo from '../components/CartHeaderInfo';
import AppModal from '../components/AppModal';

const CartPage = () => {

  const totalCart = useSelector(getTotalCart);
  
  const [searchQuery] = useSearchParams();

  const [perPage, setPerPage] = useState(2);
  const [configPromo, setConfigPromo] = useState({shiping: 8, sale: 10})
  const [currentPage, setCurrentPage] = useState(1);
  const [isPromo, setIsPromo] = useState({sale: false, shiping: false});
  const [totalPrice, setTotalPrice] = useState(0);
  const [oldPrices, setOldPrices] = useState({shiping: 8, price: 0});

  const [isOpen, setIsOpen] = useState(false);
  const [orderAccepted, setOrderAccepted] = useState(false);

  const perPageCart = useMemo(() => {
    const pages = Math.ceil(totalCart.length / perPage);
    if (currentPage > pages) setCurrentPage(currentPage - 1);
    return totalCart.slice((currentPage - 1) * perPage, currentPage * perPage);
  }, [perPage, currentPage, totalCart])

  function addPromo(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "RS") setIsPromo({...isPromo, sale: true});
    if (e.target.value === "EPM") {
      setConfigPromo({...configPromo, shiping: 0})
      setIsPromo({...isPromo, shiping: true});
    }
  }

  function getProductIndex(id: number) {
    return totalCart.findIndex(item => item.id === id) + 1;
  }

  useMemo(() => {
    let priceCounter = 0;
    totalCart.map((item) => priceCounter += item.price * item.amount);
    setOldPrices({...oldPrices, price: priceCounter})
    setTotalPrice(priceCounter);
  }, [totalCart])

  useMemo(() => {
    if (searchQuery.get('page')) {
      const queryPage = searchQuery.get('page');
      if (queryPage) setCurrentPage(+queryPage);
    }
    if (searchQuery.get('limit')) {
      const queryLimit = searchQuery.get('limit');
      if (queryLimit) setPerPage(+queryLimit);
    }
  },[])

  return (
    <div className="container">
      {
        totalCart.length === 0 
        ?
        <div className="cart__content">
          <h2 className='error-message'>Your cart is empty</h2>
        </div>
        :
        <div className="cart__content">
          <div className='cart__content-cart'>
            <div className='cart__content-header'>
              <h2 className='cart__content-heading'>Your order</h2>
              <CartHeaderInfo
                perPage={perPage}
                setPerPage={setPerPage} 
                currentPage={currentPage}
              />
            </div>
            <ul>
              {perPageCart.map(item => 
                <CartPageItem key={item.id} product={item} index={getProductIndex(item.id)}/>
              )}
            </ul>
            <CartPagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <CartTotalPrice
            totalPrice={totalPrice}
            oldPrices={oldPrices}
            configPromo={configPromo}
            addPromo={addPromo}
            isPromo={isPromo}
            setIsOpen={setIsOpen}
          />
        </div>
      }
      <AppModal isOpen={isOpen} setIsOpen={setIsOpen} orderAccepted={orderAccepted} setOrderAccepted={setOrderAccepted}/>
    </div>
  )
}

export default CartPage