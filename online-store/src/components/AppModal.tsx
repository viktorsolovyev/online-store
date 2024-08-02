import '../styles/components/appModal.css';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { clearCart } from '../app/feautures/cartSlice';
import AppModalForm from './AppModalForm';

interface AppModalProps {
  isOpen: Boolean,
  orderAccepted: Boolean,
  setIsOpen: Function,
  setOrderAccepted: Function,
}

const AppModal:FC <AppModalProps>= ({isOpen, orderAccepted, setIsOpen, setOrderAccepted}) => {

  const navigate = useNavigate();

  function closeModal() {
    if (orderAccepted) {
      navigate('/');
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    let t;
    clearInterval(t);
    if (orderAccepted) {
      t = setTimeout(() => {
        if (orderAccepted) {
          navigate('/');
          setOrderAccepted(false);
        }
      }, 5000);
    }
  }, [orderAccepted])

  return (  
    <div 
      onClick={!orderAccepted ? closeModal : undefined}
      className={isOpen ? 'modal modal_active' : 'modal'}
      data-testid={isOpen ? 'appModal' : ''}
    >
      {!orderAccepted 
      ?
      <AppModalForm
        clearCart={clearCart}
        setOrderAccepted={setOrderAccepted}
      />
      :
      <div 
        data-testid={orderAccepted ? 'appModalAccepted' : ''}
        onClick={(e) => e.stopPropagation()}
        className='modal__content modal__content_order'
      >
        <h2 className='modal__content-heading'>Thanks for your order!</h2>
        <p className='modal__content-description'>You will be redirected to the main page in a few seconds...</p>
      </div>
      }
    </div>
  ) 
}

export default AppModal