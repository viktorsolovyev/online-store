import '../styles/components/appModal.css';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { clearCart } from '../app/feautures/cartSlice';
import AppModalForm from './AppModalForm';

interface AppModalProps {
  isOpen: Boolean,
  setIsOpen: Function,
  orderAccepted: Boolean,
  setOrderAccepted: Function,
}

const AppModal:FC <AppModalProps>= ({isOpen, setIsOpen, orderAccepted, setOrderAccepted}) => {

  const navigate = useNavigate();

  function closeModal() {
    if (orderAccepted) {
      navigate('/');
    } else {
      setIsOpen(false);
    }
  }

  return (  
    <div onClick={closeModal} className={isOpen ? 'modal modal_active' : 'modal'}>
      {!orderAccepted 
      ?
      <AppModalForm
        clearCart={clearCart}
        setOrderAccepted={setOrderAccepted}
      />
      :
      <div onClick={(e) => e.stopPropagation()} className='modal__content modal__content_order'>
        <h2 className='modal__content-heading'>Thanks for your order!</h2>
        <button onClick={closeModal} className='btn'>Continue Shopping</button>
      </div>
      }
    </div>
  ) 
}

export default AppModal