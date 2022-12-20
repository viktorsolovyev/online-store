import '../styles/components/cartPage.css';
import '../styles/components/cartItem.css';
import { getTotalCart } from '../app/feautures/cartSlice';
import { useSelector } from 'react-redux';
import CartPageItem from '../components/CartPageItem';

const CartPage = () => {

  const totalCart = useSelector(getTotalCart);

  return (
    <div className="container">
      <div className="cart__content">
        <div className='cart__content-cart'>
          <div className='cart__content-header'>
            <h2 className='cart__content-heading'>Your order</h2>
            <div className='cart__content-header-info'>
              <div>Per page: 1</div>
              <div>Page:</div>
            </div>
          </div>
          <ul>
            {totalCart.map(item => 
              <CartPageItem product={item}/>
            )}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CartPage